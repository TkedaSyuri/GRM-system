"use client";

import { useAppDispatch, useAppSelector } from "@/app/features/Redux/hooks";
import ChatBar from "./ChatBar/ChatBar";
import TaskBar from "./TaskBar/TaskBar";
import {
  openTaskBar,
  openChatBar,
} from "@/app/features/Redux/toggle/toggleSlice";

const SideBar = () => {
  const { isBarOpen, isCompletedTaskOpen } = useAppSelector(
    (state) => state.toggle
  );
  const dispatch = useAppDispatch();
  return (
    <div className="w-96 h-full border-2 border-black flex flex-col bg-white">
      <div className="flex">
        <div
          className={`flex-1 px-7 py-1 font-semibold cursor-pointer text-center hover:text-white  hover:bg-green-600 duration-500  ${
            !isBarOpen ? "bg-green-800 text-black " : "  bg-green-600 text-white "
          }`}
          onClick={() => dispatch(openChatBar())}
        >
          連絡チャット
        </div>

        {isCompletedTaskOpen ? (
          <div
            className={`flex-1 px-5 py-1 text-center font-semibold hover:text-white  hover:bg-cyan-600 duration-500   cursor-pointer ${
              isBarOpen ? "bg-cyan-800 text-black" : "   bg-cyan-600 text-white"
            }`}
            onClick={() => dispatch(openTaskBar())}
          >
            完了タスク一覧
          </div>
        ) : (
          <div
            className={`flex-1 px-5 py-1  text-center font-semibold hover:text-white  hover:bg-green-600 duration-500  cursor-pointer ${
              isBarOpen ? "bg-green-800 text-black " : "  bg-green-600 text-white "
            }`}
            onClick={() => dispatch(openTaskBar())}
          >
            タスク一覧
          </div>
        )}
      </div>

      <div className="flex-grow bg-white">
        {isBarOpen ? <ChatBar /> : <TaskBar />}
      </div>
    </div>
  );
};

export default SideBar;
