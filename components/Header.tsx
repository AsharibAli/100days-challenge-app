"use client";
import React, { useState } from "react";
import Link from "next/link";
import { SearchIcon, MenuIcon, XIcon } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">GIAIC</h1>
        <div className="relative w-1/2 md:w-1/3 lg:w-1/4">
          <input
            className="text-black w-full h-10 px-4 rounded-md border-2 border-gray-300 focus:border-blue-500 transition-colors"
            placeholder="Search..."
            type="text"
          />
          <SearchIcon className="absolute right-2 top-1/2 transform -translate-y-2/4 w-5 h-5 text-gray-500" />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="/about">
            About
          </Link>
          <Link className="hover:underline" href="/challenges">
            Challenges
          </Link>
          <Link
            className="hover:underline"
            href="https://github.com/AsharibAli/100-days-of-code/"
            target="_blank"
          >
            Github
          </Link>
          <Link
            className="hover:underline"
            href="https://discord.gg/3KmgbA8jZV"
            target="_blank"
          >
            Discord
          </Link>
        </nav>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col space-y-4">
            <Link className="hover:underline" href="/">
              Home
            </Link>
            <Link className="hover:underline" href="#">
              About
            </Link>
            <Link className="hover:underline" href="/challenges">
              Challenges
            </Link>
            <Link
              className="hover:underline"
              href="https://github.com/AsharibAli/100-days-of-code/"
              target="_blank"
            >
              Github
            </Link>
            <Link
              className="hover:underline"
              href="https://discord.gg/3KmgbA8jZV"
              target="_blank"
            >
              Discord
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
