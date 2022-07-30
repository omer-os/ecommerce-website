import React from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function Blog() {
  return (
    <div>
      <nav className="py-6 items-center px-8 flex justify-between fixed top-0 left-0 w-full shadow-xl">
        <div className="click-action flex items-center gap-3">
          <div className="flex flex-col gap-1.5 cursor-pointer active:scale-95">
            <div className="h-[.2em] bg-black w-8"></div>
            <div className="h-[.2em] bg-black w-5"></div>
            <div className="h-[.2em] bg-black w-6"></div>
          </div>
          <div className="text-xl">MENU</div>
        </div>

        <div className="logo font-bold text-3xl">Omar Blog</div>

        <div className="click-action items-center flex gap-2">
          <div className="text-xl">Search</div>
          <div className="w-7 h-7">
            <IoSearchSharp className="w-full h-full" />
          </div>
        </div>
      </nav>
    </div>
  );
}
