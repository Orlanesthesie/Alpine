import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="d-flex align-items-start mb-3">
          <div className="col">
            <h3 className="mb-5 text-center">Autres sites</h3>

            <li className="text-center">
              <a className="text-white " href="https://www.alpinecars.com/">
                Alpinecars.com
              </a>
            </li>
            <li className="text-center">
              <a className="text-white" href="https://en.media.alpinecars.com">
                Espace Media
              </a>
            </li>
            <li className="text-center">
              <a
                className="text-white"
                href="https://www.alpineelfcupseries.com/"
              >
                Alpine Elf Cup Series
              </a>
            </li>
            <li className="text-center">
              <a className="text-white" href="https://www.alpine-eyewear.com/">
                Alpine Eyewear
              </a>
            </li>
            <li className="text-center">
              <a className="text-white" href="https://boutique.alpinecars.com/">
                Boutique
              </a>
            </li>
          </div>
          <div className="col">
            <h3 className="mb-5 text-center">Liens directs</h3>
            <div className="row">
              <Link className="nav-link text-center" to="/">
                Home
              </Link>
              <Link className="nav-link text-center" to="/configurator">
                Configurator
              </Link>
            </div>
          </div>
          <div className="col">
            <h3 className="mb-5 text-center">
              L'expérience #AlpineCars se poursuit sur
            </h3>
            <div className="col d-flex justify-content-around">
              <a href="https://fr-fr.facebook.com/alpinesportscars/">
                <i class="fa-brands fa-facebook-f fa-2xl"></i>
              </a>
              <a href="https://x.com/AlpineF1Team?s=20&t=HaDDdmh5jRqowXRevmR_aQ">
                <i class="fa-brands fa-x-twitter fa-2xl"></i>
              </a>
              <a href="https://www.instagram.com/alpinecars/?hl=fr">
                <i class="fa-brands fa-instagram fa-2xl"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCzH4Iwlm8kI09wXbgHvFfIg">
                <i class="fa-brands fa-youtube fa-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer_img">
          <img
            className="footer_img mx-auto "
            src="/images/sources-homepage/logo/logo-white.png"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
