import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-center items-center mx-auto bg-amber-800">
        <span>Nombre</span>

        <ul>
          <li>Home</li>
          <li>Sobre mí</li>
          <li>Proyectos</li>
          <li>Contacto</li>
        </ul>

        <button className="material-symbols-outlined">menu</button>
      </div>
    </nav>
  );
};

export default Navbar;
