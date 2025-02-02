import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar bg-base-100 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Demo Kavárna
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Domů</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/news">Aktuality</Link>
            </li>
            <li>
              <Link to="/contact">O Nás</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              /* Close Icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* Hamburger Menu Icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-base-100">
          <ul className="menu menu-vertical p-2">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Domů
              </Link>
            </li>
            <li>
              <Link to="/menu" onClick={() => setMenuOpen(false)}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/news" onClick={() => setMenuOpen(false)}>
                Aktuality
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                O Nás
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
