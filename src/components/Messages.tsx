import { useEffect, useState } from "react";
import Button from "./Button";

// Extend the Navigator interface to include the AI API
interface NavigatorAI extends Navigator {
  ai?: {
    languageDetector?: {
      create: () => Promise<{
        detect: (text: string) => Promise<{ detectedLanguage: string }[]>;
      }>;
    };
    translator?: {
      create: (options: {
        sourceLanguage: string;
        targetLanguage: string;
      }) => Promise<{
        translate: (text: string) => Promise<{ translatedText: string }>;
      }>;
    };
  };
}

declare const navigator: NavigatorAI;

interface MessagesProps {
  text: string;
}

const Messages = ({ text }: MessagesProps) => {
  const [detectedLanguage, setDetectedLanguage] = useState("Detecting...");
  const [translatedText, setTranslatedText] = useState(text);
  const [targetLanguage, setTargetLanguage] = useState("fr"); // Default to French
  const [error, setError] = useState<string | null>(null); // State for error messages

  useEffect(() => {
    const detectLanguage = async () => {
      if (!text) return; // If text is empty, don't run detection

      const ai = navigator.ai; // Store AI API reference
      if (!ai?.languageDetector) {
        setDetectedLanguage("Unavailable");
        setError("Language detection is not supported in this browser.");
        return;
      }

      try {
        const detector = await ai.languageDetector.create();
        const results = await detector.detect(text);

        if (results.length > 0) {
          setDetectedLanguage(results[0].detectedLanguage);
          setError(null); // Clear previous errors
        } else {
          setDetectedLanguage("Unknown");
          setError("Could not detect language.");
        }
      } catch (err) {
        console.error("Language detection error:", err);
        setDetectedLanguage("Error");
        setError("Failed to detect language.");
      }
    };

    detectLanguage();
  }, [text]);

  const handleTranslation = async () => {
    if (!text) return;

    const ai = navigator.ai; // Store AI API reference
    if (!ai?.translator) {
      setError("Translation API is not supported in this browser.");
      return;
    }

    try {
      const translator = await ai.translator.create({
        sourceLanguage: detectedLanguage, // Auto-detected source
        targetLanguage: targetLanguage, // User-selected language
      });

      const result = await translator.translate(text);
      setTranslatedText(result.translatedText);
      setError(null); // Clear errors if successful
    } catch (err) {
      console.error("Translation error:", err);
      setTranslatedText("Translation unavailable.");
      setError("Translation failed. Please try again.");
    }
  };

  return (
    <div>
      <div className="text-(--textColor) w-[18rem] md:w-[25rem] bg-(--secondaryColor) rounded-[12px] p-3">
        <p>{translatedText}</p>
        <small>{`Detected Language: ${detectedLanguage}`}</small>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}{" "}
        {/* Display errors */}
        <div className="flex justify-between mt-2">
          <div className="flex items-center gap-1">
            <label className="block text-[0.5rem]" htmlFor="language">
              Translate to:
            </label>
            <select
              className="block text-sm p-1 border rounded"
              id="language"
              name="language"
              value={targetLanguage}
              onChange={(e) => setTargetLanguage(e.target.value)}
            >
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              <option value="de">German</option>
              <option value="zh">Chinese</option>
              <option value="ja">Japanese</option>
            </select>
          </div>
          <Button
            className="block cursor-pointer bg-(--primaryColor) hover:text-green-600 p-1 rounded-[10px] text-sm"
            onClick={handleTranslation}
          >
            Translate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
