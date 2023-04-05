import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <div className="bg-amber-300 text-white border-4 rounded-md border-amber-500 border-soild p-2 shadow ">
      <div className="font-black text-lg">
        <ul className="flex flex-row">
          <ul className="font-black text-xl mx-10">My Website</ul>
          <li className="mx-5">
            <Link href="/">Home</Link>
          </li>
          <li className="mx-5">
            <Link href="/article">Article</Link>
          </li>
          <li className="mx-5">
            <Link href="/serve">Serve</Link>
          </li>
          <li className="mx-5">
            <Link href="/customer">Customer</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;