import React from "react";

const Contacto = () => {
  return (
    <section className="contactSection" id="contacto">
      <div className="tituloContact">
        <p className="sobreMi">Contacto</p>
        <p className="subtituloSM">
          Ya sea por alguna duda o para presupuestar algún proyecto, podés
          comunicarte conmigo.
        </p>
      </div>
      <div className="contactIconsDiv">
          <div className="iconSeparator">
            <div className="circles">
              <i className="fa-solid fa-location-dot fa-xl contactIcons"></i>
            </div>
            <div className="infoIcons">
              <p className="circleTitle">Localidad</p>
              <p>
                La Plata, Buenos Aires, Argentina
              </p>
            </div>
          </div>
          <div className="iconSeparator">
            <div className="circles">
              <i className="fa-solid fa-envelope fa-xl contactIcons"></i>
            </div>
            <div className="infoIcons">
              <p className="circleTitle">Mail</p>
              <a href="mailto:juambaaramberri9@gmail.com" className="linkTarjetas">
                juambaaramberri9@gmail.com
              </a>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Contacto;
