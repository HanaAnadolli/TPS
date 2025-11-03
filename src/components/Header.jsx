import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/blog", label: "News & Views" },
    { to: "/contact", label: "Contact Us" },
  ];

  const getLinkClassName = (path) => {
    const isActive = location.pathname === path;
    return isActive
      ? "relative font-medium text-[var(--primary-color)] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[1px] sm:after:h-[1.5px] lg:after:h-[2px] after:w-1/2 lg:after:w-full lg:after:left-0 lg:after:translate-x-0 after:bg-[var(--primary-color)]"
      : "relative font-medium text-black/90 no-underline transition-colors hover:text-[var(--primary-color)]";
  };

  return (
    <header className="relative">
      <div className="mx-auto flex h-20 sm:h-24 lg:h-[150px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
          <img src={logo} alt="TPS logo" className="h-8 sm:h-10 lg:h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.to} className="relative">
                <Link to={link.to} className={getLinkClassName(link.to)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <nav
        className={`lg:hidden fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-between items-center px-6 py-4 ">
            <h2 className="text-xl font-semibold text-gray-800"></h2>
            <button
              onClick={closeMobileMenu}
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col flex-1 px-6 py-8 space-y-6 overflow-y-auto items-center">
            {navLinks.map((link) => (
              <li key={link.to} className="w-full text-center">
                <Link
                  to={link.to}
                  className={`block py-3 text-lg ${getLinkClassName(link.to)}`}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
