import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CreateMessage from "./components/CreateMessage";
import Messages from "./components/Messages";

function App() {
  const [text, setText] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  function handleTextChange(event: any) {
    const { value } = event.target;
    setText(value);
  }

  function handleSubmit() {
    setMessages((prevMessages: string[]) => {
      return [...prevMessages, text];
    });
    setText("");
  }

  return (
    <main className="w-full rounded-[40px]">
      <Header />
      <div className="flex flex-col gap-4 items-end  w-[18.5rem] mb-[5rem] md:h-[900px] md:mb-[5rem] md:w-[80%] md:max-w-[768px] mx-auto py-5 ">
        {messages.map((message, index) => {
          return <Messages key={index} text={message} />;
        })}
      </div>
      <CreateMessage
        text={text}
        handleTextChange={handleTextChange}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}

export default App;
