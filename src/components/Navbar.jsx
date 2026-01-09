import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <span className="text-lg font-semibold">TuNombre</span>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li className="hover:text-black/70 transition">About</li>
          <li className="hover:text-black/70 transition">Projects</li>
          <li className="hover:text-black/70 transition">Contact</li>
        </ul>

        <button className="md:hidden">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
