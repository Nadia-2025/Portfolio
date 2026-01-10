import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div>
        <span>Nombre</span>

        <ul>
          <li>Home</li>
          <li>Sobre mí</li>
          <li>Proyectos</li>
          <li>Contacto</li>
        </ul>

        <button>☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
