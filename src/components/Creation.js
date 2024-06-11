import React from "react";
import Configurator from "./Configurator";

const Creation = () => {
  return (
    <div className="p3">
      <div class="card bg-white text-white">
        <img class="card-img" src="/images/test.jpg" alt="Card image" />
        <div class="card-img-overlay">
          <h2 class="card-title text-danger mt-5">Card title</h2>
          <button className="btn"> Créer la votre </button>
          <p class="card-text text-danger">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  );
};

export default Creation;
