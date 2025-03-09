"use client"
import { useState } from "react";
import Link from "next/link"; // Remove this if you're not using React Router
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-10xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        
        {/* Logo */}
        <Link href="#home" className="text-2xl font-bold ">
          <span className="text-blue-400">Tech</span><span className="text-red-500">Beast</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link href="#home" className="hover:text-green-400 transition">Home</Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-green-400 transition">About</Link>
          </li>
          <li>
            <Link href="#tech-section" className="hover:text-green-400 transition">Stacks</Link>
          </li>
          <li>
            <Link href="#resume" className="hover:text-green-400 transition">Resume</Link>
          </li>
          
          <li>
            <Link href="#contact" className="hover:text-green-400 transition">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-400 focus:outline-none"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 py-4 bg-gray-800 text-lg absolute top-16 left-0 w-full">
          <li>
            <Link href="#" className="hover:text-green-400" onClick={() => setNavOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-green-400" onClick={() => setNavOpen(false)}>About</Link>
          </li>
          <li>
            <Link href="#tech-section" className="hover:text-green-400" onClick={() => setNavOpen(false)}>Stacks</Link>
          </li>
          <li>
            <Link href="#resume" className="hover:text-green-400" onClick={() => setNavOpen(false)}>Resume</Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-green-400" onClick={() => setNavOpen(false)}>Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
