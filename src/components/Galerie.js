import React, { useState } from "react";

const Galerie = () => {
  const [popupImage, setPopupImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setPopupImage(imageSrc);
  };

  const handleBackdropClick = () => {
    setPopupImage(null);
  };

  return (
    <div>
      <div className="row gallery">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src="/images/sources-homepage/galerie/A110_LEGENDE_1.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Virage"
            onClick={() =>
              handleImageClick(
                "/images/sources-homepage/galerie/A110_LEGENDE_1.jpg"
              )
            }
          />
          <img
            src="/images/sources-homepage/galerie/A110_LEGENDE_5.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Monaco"
            onClick={() =>
              handleImageClick(
                "/images/sources-homepage/galerie/A110_LEGENDE_5.jpg"
              )
            }
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="/images/sources-homepage/galerie/A110_LEGENDE_9.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Monaco Palmier"
            onClick={() =>
              handleImageClick(
                "/images/sources-homepage/galerie/A110_LEGENDE_9.jpg"
              )
            }
          />
          <img
            src="/images/sources-homepage/galerie/A110_PE_1.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Neige"
            onClick={() =>
              handleImageClick("/images/sources-homepage/galerie/A110_PE_1.jpg")
            }
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="/images/sources-homepage/galerie/A110_PE_7.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Neige Buche"
            onClick={() =>
              handleImageClick("/images/sources-homepage/galerie/A110_PE_7.jpg")
            }
          />
          <img
            src="/images/sources-homepage/galerie/A110_PE_9.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Neige parchoc arriere"
            onClick={() =>
              handleImageClick("/images/sources-homepage/galerie/A110_PE_9.jpg")
            }
          />
        </div>
      </div>

      {popupImage && (
        <>
          <div className="backdrop" onClick={handleBackdropClick}></div>
          <div className="popup">
            <img src={popupImage} alt="Zoomed" />
          </div>
        </>
      )}
    </div>
  );
};

export default Galerie;
