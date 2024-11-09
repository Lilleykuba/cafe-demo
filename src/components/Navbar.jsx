import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-lg font-bold">
          Cafe Demo
        </Link>
        <div>
          <Link to="/" className="text-gray-300 hover:text-white mx-2">
            Home
          </Link>
          <Link to="/menu" className="text-gray-300 hover:text-white mx-2">
            Menu
          </Link>
          <Link to="/news" className="text-gray-300 hover:text-white mx-2">
            News
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white mx-2">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
