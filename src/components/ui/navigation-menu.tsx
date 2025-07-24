import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          TechPath Navigator
        </Link>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-center">
            <li>
              <a href="#home" className="block px-4 py-2 text-gray-700 hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="block px-4 py-2 text-gray-700 hover:text-blue-600">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="block px-4 py-2 text-gray-700 hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="block px-4 py-2 text-gray-700 hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
