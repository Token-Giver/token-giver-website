"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AlignLeft, X } from "lucide-react"; 
function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-6 md:px-[100px] flex justify-between items-center bg-white py-2 md:py-4 relative">

      <Link href="/">
        <img src="/logo.svg" className="w-[150px]" alt="Logo" />
      </Link>

      <ul className="hidden md:flex items-center gap-x-10 text-sm font-medium text-ash duration-75">
        <li>
          <Link href="/" className={`${pathname === "/" ? "text-primary font-semibold" : ""}`}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={`${pathname === "/about" ? "text-primary font-semibold" : ""}`}>
            About
          </Link>
        </li>
        <li>
          <Link href="/learn" className={`${pathname === "/learn" ? "text-primary font-semibold" : ""}`}>
            Get Started
          </Link>
        </li>
      </ul>

    
      <button className="hidden md:block py-3 px-[30px] rounded-full bg-primary font-semibold text-sm text-white">
        Start a Campaign
      </button>

     
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">

        {isOpen ? <X size={20} /> : <AlignLeft size={20} />}
      </button>

     
      <div
        className={`absolute top-16 left-0 w-full bg-white shadow-md md:hidden transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-y-6 py-6 text-sm font-medium text-ash">
          <li>
            <Link href="/" className={`${pathname === "/" ? "text-primary font-semibold" : ""}`} onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={`${pathname === "/about" ? "text-primary font-semibold" : ""}`} onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/learn" className={`${pathname === "/learn" ? "text-primary font-semibold" : ""}`} onClick={() => setIsOpen(false)}>
              Get Started
            </Link>
          </li>
          <li>
            <button className="py-3 px-6 rounded-full bg-primary font-semibold text-sm text-white w-full text-center" onClick={() => setIsOpen(false)}>
              Start a Campaign
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
