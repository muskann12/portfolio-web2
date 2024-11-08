'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg- p-4 ">
      <div className="container mx-auto flex justify-between items-center text-xl">
        <Link href="/" className="text-blue-900 hover:text-blue-300 text-2xl font-extrabold underline">
          MUSKAN NISAR
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-11">
          <Link href="/" className="text-blue-800 hover:text-blue-300 font-bold">Home</Link>
          <Link href="/about" className="text-blue-800 hover:text-blue-300 font-bold">About</Link>
          <Link href="/projects" className="text-blue-800 hover:text-blue-300 font-bold">Projects</Link>
          <Link href="/skills" className="text-blue-800 hover:text-blue-300 font-bold">Skills</Link>
          <Link href="/contact" className="text-blue-800 hover:text-blue-300 font-bold">Contact</Link>

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-900">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4">
          <Link href="/" className="text-blue-300 hover:text-blue-300 font-bold mb-2">Home</Link>
          <Link href="/about" className="text-blue-300 hover:text-blue-300 font-bold mb-2">About</Link>
          <Link href="/projects" className="text-blue-300 hover:text-blue-300 font-bold mb-2">Projects</Link>
          <Link href="/skills" className="text-blue-300 hover:text-blue-300 font-bold mb-2">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;