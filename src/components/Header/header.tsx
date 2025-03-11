import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

import  "../../../public/code.svg";

export default function header() {
  return (
    <div className="flex flex-col px-10 py-5 gap-10">
      <div className="w-full h-[50%] flex justify-between items-center ">
        <div className="flex flex-col gap-1">
          <div className="flex gap-5 ">
            <img src="../../../public/code.svg" alt="" />
          <h1 className="text-white font-bold text-3xl ">Welcome back!</h1>
          </div>
          <span className="text-gray-400">
            Here's a list of your tasks for this month!
          </span>
        </div>
        <Avatar>
          <AvatarImage
            src="https://github.com/Herojesus.png"
            alt="@HEROjesus"
          />
          <AvatarFallback>HJ</AvatarFallback>
        </Avatar>
      </div>
      <div className=" flex items-center ">
        <Input
          type="text"
          placeholder="Filter tasks"
          className="w-[17%] h-10 border-2 rounded-sm  text-white bg-[trasnparaent] px-2 focus:outline-none focus:ring-0 focus:border-gray-500 focus-visible:outline-none focus-visible:ring-0"
        />
      </div>
    </div>
  );
}
