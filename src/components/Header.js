import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="header">
        <h3 className="nombre">Juan Bautista Aramberri</h3>
        <ul className="nav">
          <li className="navItem"><a href="#inicio" className="linkTarjetas">Inicio</a></li>
          <li className="navItem"><a href="#about" className="linkTarjetas">Sobre mí</a></li>
          <li className="navItem"><a href="#portfolio" className="linkTarjetas">Portfolio</a></li>
          <li className="navItem"><a href="#contacto" className="linkTarjetas">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
