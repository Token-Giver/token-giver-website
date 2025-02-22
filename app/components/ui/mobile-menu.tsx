"use client";
import { X } from "lucide-react";
import Link from "next/link";

function MobileMenu({ handleClose }: { handleClose: () => void }) {
  return (
    <div className="absolute inset-0 bg-primary p-5 flex flex-col text-white z-[200]">
      <div className="flex justify-between items-center mb-6">
        <img
          src="/logo-long-white.svg"
          className="w-[108px]"
          alt="TokenGiver Logo"
        />
        <button onClick={handleClose} aria-label="Close menu">
          <X />
        </button>
      </div>

      <nav className="flex-1">
        <ul className="flex flex-col gap-y-6 text-sm font-medium duration-75 mb-10">
          <li>
            <Link href="/" onClick={handleClose}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={handleClose}>
              About
            </Link>
          </li>
          <li>
            <Link href="/learn" onClick={handleClose}>
              Get Started
            </Link>
          </li>
        </ul>

        <button
          className="bg-white py-3 rounded-full w-full text-primary text-sm font-medium"
          onClick={handleClose}
        >
          Start A Campaign
        </button>
      </nav>

      <h6 className="text-xs text-center">
        Copyright © 2025 TokenGiver. All rights reserved.
      </h6>
    </div>
  );
}

export default MobileMenu;
