import React, { useState } from "react";
import "../../css/Configurator.css";

const images = [
  "/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (1).jpg",
  "/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (2).jpg",
  "/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (3).jpg",
  "/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (4).jpg",
];

const CarouselConfig = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="custom-carousel">
      <button
        onClick={goToPrevious}
        className="custom-carousel-button custom-carousel-button-left"
      >
        &#10094;
      </button>
      <div className="custom-carousel-slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <button
        onClick={goToNext}
        className="custom-carousel-button custom-carousel-button-right"
      >
        &#10095;
      </button>
    </div>
  );
};

export default CarouselConfig;
