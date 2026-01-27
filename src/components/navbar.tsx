"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] py-2 px-4 rounded-xl flex items-center justify-between transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      
      {/* Avatar / Logo Section */}
      <div className="flex items-center gap-4">
          <div className="w-10 h-10 border-2 border-black overflow-hidden bg-yellow-400">
             <img src="/me.png" alt="Logo" className="w-full h-full object-cover" /> 
          </div>
          <div className="h-8 w-[2px] bg-black hidden sm:block"></div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="relative font-bold uppercase tracking-wide px-2 py-1 group"
          >
            <span className="relative z-10 text-black transition-colors group-hover:text-white pointer-events-none">
              {item.name}
            </span>
            <span className="absolute inset-0 bg-red-600 scale-0 group-hover:scale-100 transition-transform origin-bottom duration-200 ease-out -skew-x-12"></span>
          </Link>
        ))}
      </div>

      {/* Right Side / Resume */}
      <div className="flex items-center gap-4">
        <div className="h-8 w-[2px] bg-black hidden sm:block"></div>
        <Button variant="default" size="sm" className="bg-black text-white hover:bg-gray-800 border-2 border-black rounded-none shadow-[2px_2px_0px_0px_#999]">
          RESUME 
          <span className="ml-2">↓</span>
        </Button>
      </div>
    </nav>
  );
}
