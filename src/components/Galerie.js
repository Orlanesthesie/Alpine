import React from "react";

const Galerie = () => {
  return (
    <div class="row gallery">
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <img
          src="/images/sources-homepage/galerie/A110_LEGENDE_1.jpg"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Virage"
        />

        <img
          src="/images/sources-homepage/galerie/A110_LEGENDE_5.jpg"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Monaco"
        />
      </div>

      <div class="col-lg-4 mb-4 mb-lg-0">
        <img
          src="/images/sources-homepage/galerie/A110_LEGENDE_9.jpg"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Monaco Palmier"
        />

        <img
          src="/images/sources-homepage/galerie/A110_PE_1.jpg"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Neige"
        />
      </div>

      <div class="col-lg-4 mb-4 mb-lg-0">
        <img
          src="/images/sources-homepage/galerie/A110_PE_7.jpg"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Neige Buche"
        />

        <img
          src="/images/sources-homepage/galerie/A110_PE_9.jpg"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Neige parchoc arriere"
        />
      </div>
    </div>
  );
};

export default Galerie;
