import SearchIcon from "@/app/svg/SearchIcon";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="px-[100px] flex justify-between items-center bg-white">
      <img src="/logo.svg" alt="" />
      <div className="flex items-center gap-x-[258px]">
        <ul className="flex items-center gap-x-10 text-base font-medium leading-5 text-ash">
          <li>
            <Link href="/" className="flex items-center gap-x-2">
              <SearchIcon />
              Search
            </Link>
          </li>
          <li>
            <Link href="about">About</Link>
          </li>
          <li>
            <Link href="/">Donate</Link>
          </li>
        </ul>
        <div className="flex items-center gap-x-[14px]">
          {/* <button className="py-4 px-[22px] text-sm leading-[24px] text-white font-semibold border-[1.5px] border-white rounded-full">
            Sign In
          </button> */}
          <button className="py-3 px-[30px] rounded-full bg-primary font-semibold text-base leading-[26px] text-white">
            Start a Campaign
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
