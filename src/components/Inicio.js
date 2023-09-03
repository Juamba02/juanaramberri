import React from "react";

const Inicio = () => {
  return (
    <section className="inicioSection" id="inicio">
      <div className="introContainer">
        <div className="divDesc">
          <div className="divSubtitulo">
            <h1 className="subtitulo">Web Developer</h1>
            <img src="/static/img/developer.webp" className="imgSubtitulo" alt="Developer emoji" />
          </div>
          <div className="miniDesc">
            <p>
              Hola, soy Juan Bautista Aramberri. Soy un Desarrollador Web de La
              Plata, Argentina.
            </p>
          </div>
          <div className="links">
            <a href="https://github.com/Juamba02">
              <i className="fa-brands fa-github iconos"></i>
            </a>
            <a href="https://www.linkedin.com/in/juanbautistaaramberri/">
              <i className="fa-brands fa-linkedin iconos"></i>
            </a>
          </div>
        </div>
        <div className="fotoYo"></div>
      </div>
      <div className="skillsContainer">
        <p className="skillsTitle">Skills   | </p>
        <p className="skillsTitle inactive">Skills</p>
        <ul className="skillsList">
            <li className="skills"><img src="/static/img/html.png" alt="HTML5" title="HTML5" className="skillImage"/></li>
            <li className="skills"><img src="/static/img/css.png" alt="CSS3" title="CSS3" className="skillImage" /></li>
            <li className="skills"><img src="/static/img/js.png" alt="JavaScript" title="JavaScript" className="skillImage" /></li>
            <li className="skills"><img src="/static/img/react.png" alt="ReactJS" title="ReactJS" className="skillImage" /></li>
            <li className="skills"><img src="/static/img/node.png" alt="NodeJS" title="NodeJS" className="skillImage" /></li>
            <li className="skills"><img src="/static/img/php.png" alt="PHP" title="PHP" className="skillImage" /></li>
            <li className="skills"><img src="/static/img/mysql.png" alt="MySQL" title="MySQL" className="skillImage" /></li>
        </ul>
      </div>
    </section>
  );
};

export default Inicio;
