import { IoMdSend } from "react-icons/io";

interface CreateMessageProps {
  text: string;
  handleTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

const CreateMessage = ({
  text,
  handleTextChange,
  handleSubmit,
}: CreateMessageProps) => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-[5rem] grid place-content-center bg-(--primaryColor)">
      <div className="flex items-center w-[18.5rem] md:w-[768px]  mx-auto rounded-[12px] text-(--textColor) bg-(--secondaryColor) p-1">
        <input
          type="text"
          aria-placeholder="type your message"
          value={text}
          onChange={(e) => handleTextChange(e)}
          className="block w-[95%] h-[100%] outline-none p-2"
          placeholder="Type message"
        ></input>
        <div className="">
          <IoMdSend
            size={30}
            className="cursor-pointer hover:text-green-600"
            onClick={() => handleSubmit()}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateMessage;
