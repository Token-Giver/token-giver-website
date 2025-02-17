"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  // const router = useRout();
  const pathname = usePathname();
  return (
    <nav className="px-[100px] flex justify-between items-center bg-white py-1w">
      <Link href="/">
        <img src="/logo.svg" className="w-[150px]" alt="" />
      </Link>
      <ul className="flex items-center gap-x-10 text-sm font-medium text-ash duration-75">
        <li>
          <Link
            href="/"
            className={`${
              pathname === "/" ? "text-primary font-semibold" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="about"
            className={`${
              pathname === "/about" ? "text-primary font-semibold" : ""
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="learn"
            className={`${
              pathname === "/learn" ? "text-primary font-semibold" : ""
            }`}
          >
            Get Started
          </Link>
        </li>
      </ul>
      <button className="py-3 px-[30px] rounded-full bg-primary font-semibold text-sm text-white">
        Start a Campaign
      </button>
    </nav>
  );
}

export default Navbar;
