import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="flex bg-neutral space-x-6 border-b-2 h-14 px-5 items-center">
        <ul className="flex space-x-6 text-zinc-200">
          <li>
            <Link href="/" className="text-zinc-100 hover:text-zinc-300">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className="text-zinc-200 hover:text-zinc-300"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-zinc-200 hover:text-zinc-300 ">
              About
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-zinc-200 hover:text-zinc-300"
            >
              Products
            </Link>
          </li>
          <li>
            <Link href="/users" className="text-zinc-200 hover:text-zinc-300">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
