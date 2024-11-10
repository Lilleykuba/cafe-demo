import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h2 className="footer-title">Naše Kavárna</h2>
            <ul className="list-none">
              <li>
                <Link to="/menu" className="link link-hover">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/news" className="link link-hover">
                  Aktuality
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link link-hover">
                  O Nás
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h2 className="footer-title">Více o Nás</h2>
            <ul className="list-none">
              <li>
                <Link to="/" className="link link-hover">
                  O Nás
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="link link-hover">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h2 className="footer-title">Spojte se s námi</h2>
            <ul className="list-none">
              <li>
                <a href="#" className="link link-hover">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Demo Kavárna. Všechna práva
            vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
