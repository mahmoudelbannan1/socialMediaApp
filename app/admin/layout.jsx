import Link from "next/link";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen ">
      <aside className="bg-slate-200 p-5 w-[30%] ">
        <ul className="flex flex-col space-y-10 ">
          <li>
            <Link href="/" className="text-zinc-550 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="text-zinc-550 hover:underline">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-zinc-550 hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-zinc-550 hover:underline">
              Products
            </Link>
          </li>
          <li>
            <Link href="/admin/users" className="text-zinc-550 hover:underline">
              Users
            </Link>
          </li>
        </ul>
      </aside>

      {children}
    </div>
  );
};

export default AdminLayout;
