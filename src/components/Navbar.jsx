import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[100] bg-white/80 backdrop-blur-md  border-blush/20">
      <div className="max-w-xl flex justify-between items-center mx-auto px-6 h-16 ">
        <div className="flex justify-start items-center ">
          <span>Nombre</span>
        </div>
        <div className="flex justify-end items-center ">
          <ul className="hidden md:flex justify-center items-center gap-5">
            <li>
              <Link
                to="/"
                className="text-text-main hover:text-accent-pink transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="text-text-main hover:text-accent-pink transition-colors"
              >
                Sobre mí
              </Link>
            </li>
            <li>
              <Link
                to="/Projects"
                className="text-text-main hover:text-accent-pink transition-colors"
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="text-text-main hover:text-accent-pink transition-colors"
              >
                Contacto
              </Link>
            </li>
          </ul>
          <div className="bg-red-500 md:bg-green-500">Test</div>

          <button
            className="material-symbols-outlined cursor-pointer text-gray-600 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            menu
          </button>
        </div>
        {/* *****Mobile Menu********** */}
        <ul
          className={`md:hidden flex flex-col  items-center gap-5 transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <li>
            <Link
              to="/"
              className="text-text-main hover:text-accent-pink transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="text-text-main hover:text-accent-pink transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sobre mí
            </Link>
          </li>
          <li>
            <Link
              to="/Projects"
              className="text-text-main hover:text-accent-pink transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className="text-text-main hover:text-accent-pink transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
