import { IoMdSend } from "react-icons/io";
import Button from "./Button";

const Main = () => {
  return (
    <main>
      <div className="flex flex-col gap-4 items-end  w-[18.5rem] overflow-y-auto mb-[5rem] md:h-[900px] md:mb-[2rem] md:w-[80%] md:max-w-[768px] mx-auto">
        <div className="text-(--textColor) w-[15rem] md:w-[25rem] bg-(--secondaryColor)  rounded-[12px] p-3">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
            ducimus atque saepe dolores laborum veniam porro alias, ad error
            aliquam deleniti praesentium beatae fuga, doloribus voluptate sint
            ab dolor voluptatem nobis. Earum odio id enim dignissimos ad sit
            quis numquam, eos maxime harum natus nemo? Sit ducimus blanditiis
            saepe maiores!
          </p>
          <small>lang: en</small>
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <label className="block" htmlFor="language">
                Translate:
              </label>
              <select className="block" id="language" name="language">
                <option value="French">French</option>
                <option value="French">French</option>
                <option value="French">French</option>
                <option value="French">French</option>
                <option value="French">French</option>
                <option value="French">French</option>
                <option value="French">French</option>
              </select>
            </div>
            <Button className="block cursor-pointer bg-(--primaryColor) p-1 rounded-[10px]">
              Summarize
            </Button>
          </div>
        </div>
        <div className="text-(--textColor) w-[12.5rem] md:w-[25rem] bg-(--secondaryColor)  rounded-[12px] p-3">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
            ducimus atque saepe dolores laborum veniam porro alias, ad error
            aliquam deleniti praesentium beatae fuga, doloribus voluptate sint
            ab dolor voluptatem nobis. Earum odio id enim dignissimos ad sit
            quis numquam, eos maxime harum natus nemo? Sit ducimus blanditiis
            saepe maiores!
          </p>
          <small>lang: en</small>
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <label className="block" htmlFor="language">
                Translate:
              </label>
              <select className="block" id="language" name="language">
                <option value="French">French</option>
                <option value="French">French</option>
                <option value="French">French</option>
                <option value="French">French</option>
                <option value="French">French</option>
                <option value="French">French</option>
                <option value="French">French</option>
              </select>
            </div>
            <Button className="block cursor-pointer bg-(--primaryColor) p-1 rounded-[10px]">
              Summarize
            </Button>
          </div>
        </div>
        <div className="text-(--textColor) w-[12.5rem] md:w-[25rem] bg-(--secondaryColor)  rounded-[12px] p-3">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
            ducimus atque saepe dolores laborum veniam porro alias, ad error
            aliquam deleniti praesentium beatae fuga, doloribus voluptate sint
            ab dolor voluptatem nobis. Earum odio id enim dignissimos ad sit
            quis numquam, eos maxime harum natus nemo? Sit ducimus blanditiis
            saepe maiores!
          </p>
          <small>lang: en</small>
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <label className="block" htmlFor="language">
                Translate:
              </label>
              <select className="block" id="language" name="language">
                <option value="French">French</option>
                <option value="French">French</option>
                <option value="French">French</option>
                <option value="French">French</option>
                <option value="French">French</option>
                <option value="French">French</option>
                <option value="French">French</option>
              </select>
            </div>
            <Button className="block cursor-pointer bg-(--primaryColor) p-1 rounded-[10px]">
              Summarize
            </Button>
          </div>
        </div>
      </div>
      <form className="fixed bottom-0 left-0 w-full h-[5rem] grid place-content-center bg-(--primaryColor)">
        <div className="flex items-center w-[18.5rem] md:w-[768px]  mx-auto rounded-[12px] text-(--textColor) bg-(--secondaryColor) p-1">
          <input
            className="block w-[95%] h-[100%] outline-none p-2"
            placeholder="Type message"
          ></input>
          <div className="">
            <IoMdSend size={30} className="" />
          </div>
        </div>
      </form>
    </main>
  );
};

export default Main;
