import React from "react";
import { Link } from "react-router-dom"; // Importez Link depuis react-router-dom
import Configurator from "./Configurator";

const Creation = () => {
  return (
    <div className="p3">
      <div class="card bg-white text-white">
        <img class="card-img" src="/images/test.jpg" alt="Card image" />
        <div class="card-img-overlay">
          <section class="portfolio-experiment">
            <Link to="/Configurator">
              <span class="text">Créer la vôtre</span>
              <span class="line -right"></span>
              <span class="line -top"></span>
              <span class="line -left"></span>
              <span class="line -bottom"></span>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Creation;
