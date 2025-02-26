"use client";
import HamburgerIcon from "@/app/svg/HamburgerIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import MobileMenu from "./mobile-menu";
import LockBodyScroll from "../LockBodyScroll";

function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      {isMobileMenuOpen &&
        createPortal(
          <MobileMenu handleClose={() => setIsMobileMenuOpen(false)} />,
          document.body
        )}
      <LockBodyScroll lock={isMobileMenuOpen} />
      <nav className="lg:px-[100px] flex justify-between items-center bg-white lg:py-1 px-5">
        <Link href="/">
          <img src="/logo.svg" className="w-[106px] lg:w-[150px]" alt="" />
        </Link>
        <ul className="hidden lg:flex items-center gap-x-10 text-sm font-medium text-ash duration-75">
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
        <button className="py-3 px-[30px] rounded-full bg-primary font-semibold text-sm text-white hidden lg:flex">
          Start a Campaign
        </button>
        <button
          className="text-ash flex lg:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <HamburgerIcon />
        </button>
      </nav>
    </>
  );
}

export default Navbar;