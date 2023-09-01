import React from "react";

const About = () => {
  return (
    <section className="aboutSection">
      <div className="aboutDiv">
        <div className="aboutImageDiv">
          <img
            src="/static/img/about.webp"
            alt="About"
            className="aboutImage"
          />
        </div>
        <div className="infoAboutDiv">
          <h3 className="sobreMi">Sobre mí</h3>
          <h4 className="subtituloSM">
            Un Web developer de La Plata, Argentina.
          </h4>
          <p className="descAbout">
            Utilizo lenguajes como HTML, CSS y JavaScript para dar vida a las
            páginas, y aprovecho tecnologías como ReactJS y NodeJS para
            construir aplicaciones modernas y eficientes. También tengo
            experiencia en PHP y MySQL para desarrollar soluciones backend
            sólidas. Mi objetivo es fusionar diseño y funcionalidad para crear
            experiencias en línea atractivas y fluidas. Siempre estoy ansioso
            por nuevos desafíos y oportunidades para convertir ideas en realidad
            digital.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
