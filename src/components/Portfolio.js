import React from "react";
import Perla from "./Perla";
import Segundo from "./SegundoComp";

const Portfolio = () => {
  return (
    <section className="portfolioSection" id="portfolio">
      <div className="tituloPortfolio">
        <h3 className="sobreMi">Portfolio</h3>
        <p className="subtituloSM">Estos son algunos de mis proyectos</p>
      </div>
      <div className="divTarjetas">
        <Perla />
      </div>
    </section>
  );
};

export default Portfolio;
