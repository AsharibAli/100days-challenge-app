"use client";
import React, { useState } from "react";
import Link from "next/link";
import { SearchIcon, MenuIcon, XIcon } from "lucide-react";
import SearchComponent from "@/components/SearchComponent";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">GIAIC</Link>
        </h1>
        {/* Hide SearchComponent on mobile, show on larger screens */}
        <div className="hidden md:block">
          <SearchComponent />
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
            {/* Search link for mobile devices */}
            <Link className="hover:underline" href="/search">
              Search
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
