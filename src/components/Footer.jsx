import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div className="container mx-auto">
        <div>
          <span className="footer-title">Služby</span>
          <Link to="/menu" className="link link-hover">
            Menu
          </Link>
          <Link to="/news" className="link link-hover">
            Aktuality
          </Link>
          <Link to="/contact" className="link link-hover">
            O Nás
          </Link>
        </div>
        <div>
          <span className="footer-title">Naše kavárna</span>
          <Link to="/" className="link link-hover">
            O Nás
          </Link>
          <Link to="/privacy-policy" className="link link-hover">
            Privacy Policy
          </Link>
        </div>
        <div>
          <span className="footer-title">Spojte se s námi</span>
          <a href="#" className="link link-hover">
            Facebook
          </a>
          <a href="#" className="link link-hover">
            Instagram
          </a>
          <a href="#" className="link link-hover">
            Twitter
          </a>
        </div>
      </div>
      <div className="container mx-auto text-center mt-4">
        <p>
          &copy; {new Date().getFullYear()} Demo Kavárna. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
