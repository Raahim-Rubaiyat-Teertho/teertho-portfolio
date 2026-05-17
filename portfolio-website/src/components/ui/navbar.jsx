import { useState } from "react";
import hamburgerIcon from "../../assets/hamburger.svg";
import closeIcon from "../../assets/close.svg";
// Optional: for close state

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="px-7 py-5 fixed bg-slate-950/85 w-full z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-semibold">
          <a href="/">Teertho</a>
        </div>

        {/* Hamburger Icon (Mobile only) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <img
              src={menuOpen ? closeIcon : hamburgerIcon}
              alt="menu"
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-white items-center">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#music">Music</a>
          <a
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
            href="#"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col items-center md:hidden text-white mt-4 space-y-4">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#">Projects</a>
          <a href="#music">Music</a>
          <a
            className="bg-blue-600 px-4 py-2 rounded w-fit hover:bg-blue-700 transition"
            href="#"
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
}
