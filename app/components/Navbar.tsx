"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="text-xl font-semibold tracking-tight">
          <span className="text-blue-500">SaaS</span>Pro
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10 text-sm text-gray-300">
          <li><Link href="#">Features</Link></li>
          <li><Link href="#">Pricing</Link></li>
          <li><Link href="#">Solutions</Link></li>
        </ul>

        {/* CTA */}
        <Link
          href="#"
          className="hidden md:block bg-blue-500 text-black px-5 py-2 rounded-xl font-medium hover:bg-blue-400 transition"
        >
          Get Started
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 space-y-4 text-gray-300">
          <Link className="block" href="#">Features</Link>
          <Link className="block" href="#">Pricing</Link>
          <Link className="block" href="#">Solutions</Link>
          <Link className="block bg-blue-500 text-black py-2 rounded-xl text-center font-medium" href="#">
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
