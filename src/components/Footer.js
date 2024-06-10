import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="d-flex align-items-start mb-3">
          <div className="col">
            <h3 className="mb-5 text-center">Autres sites</h3>
            <ul className="text-center">
              <li>
                <a
                  className="text-white text-center "
                  href="https://www.alpinecars.com/"
                >
                  Alpinecars.com
                </a>
              </li>
              <li>
                <a
                  className="text-white text-center "
                  href="https://en.media.alpinecars.com"
                >
                  Espace Media
                </a>
              </li>
              <li>
                <a
                  className="text-white text-center "
                  href="https://www.alpineelfcupseries.com/"
                >
                  Alpine Elf Cup Series
                </a>
              </li>
              <li>
                <a
                  className="text-white text-center "
                  href="https://www.alpine-eyewear.com/"
                >
                  Alpine Eyewear
                </a>
              </li>
              <li>
                <a
                  className="text-white text-center "
                  href="https://boutique.alpinecars.com/"
                >
                  Boutique
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3 className="mb-5 text-center">Liens directs</h3>
            <div className="row">
              <a className="text-white text-center " href="/">
                Accueil
              </a>
              <a className="text-white text-center " href="/Configurator">
                Configurator
              </a>
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
