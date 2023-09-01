import React from "react";

const Perla = () => {
    return(
        <div className="tarjetas">
          <div className="divImgTarjetas">
            <a href="https://www.perlalenceria.com/">
              <img src="/static/img/perla.webp" className="imgTarjetas" />
            </a>
          </div>
          <div className="textoTarjetas">
            <p className="tituloTarjetas">Perla Lencería</p>
            <p className="descTarjetas">
              Una página web e-commerce de una tienda de ropa. Esta permite
              hacer compras online gracias a la integración de MercadoPago.
              Actualmente me encuentro trabajando para integrar la base de datos
              de ZooLogic.
            </p>
            <a href="https://www.perlalenceria.com/" className="linkTarjetas">
              Visitar página
            </a>
          </div>
        </div>
    )
}

export default Perla;