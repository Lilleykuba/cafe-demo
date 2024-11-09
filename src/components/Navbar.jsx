import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="container mx-auto">
        <div className="flex-none lg:flex">
          <div className="flex-1">
            <Link to=".pages/" className="text-2xl font-bold">
              Cafe Demo
            </Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to=".pages/">Home</Link>
              </li>
              <li>
                <Link to=".pages/menu">Menu</Link>
              </li>
              <li>
                <Link to=".pages/news">News</Link>
              </li>
              <li>
                <Link to=".pages/contact">Contact</Link>
              </li>
            </ul>
          </div>
          {/* Mobile menu button */}
          <div className="flex-none lg:hidden">
            <button
              className="btn btn-square btn-ghost"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="flex flex-col lg:hidden">
            <ul className="menu menu-vertical p-2">
              <li>
                <Link to=".pages/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to=".pages/menu" onClick={() => setMenuOpen(false)}>
                  Menu
                </Link>
              </li>
              <li>
                <Link to=".pages/news" onClick={() => setMenuOpen(false)}>
                  News
                </Link>
              </li>
              <li>
                <Link to=".pages/contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
