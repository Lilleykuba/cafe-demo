import React from "react";
import { Link } from "react-router-dom";
import { MenuIcon } from "@heroicons/react/outline";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="container mx-auto">
        <div className="flex-1">
          <MenuIcon className="h-6 w-6 text-gray-500" />
          <Link to="/" className="text-2xl font-bold">
            Cafe Demo
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
