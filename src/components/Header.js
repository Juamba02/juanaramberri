import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="header">
        <h3 className="nombre">Juan Bautista Aramberri</h3>
        <ul className="nav">
          <li className="navItem">Inicio</li>
          <li className="navItem">Sobre mí</li>
          <li className="navItem">Portfolio</li>
          <li className="navItem">Contacto</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
