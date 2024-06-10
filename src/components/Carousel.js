import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Carousel = () => {
  return (
    <div
      id="carouselVideoExample"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselVideoExample"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselVideoExample"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselVideoExample"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Inner */}
      <div className="carousel-inner">
        {/* Single item */}
        <div className="carousel-item active">
          <video className="img-fluid w-100" autoPlay loop muted>
            <source
              src="/video/Alpine-Milan-HomePage-1680x951-950-non-possible-v3-12072021.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        {/* Single item */}
        <div className="carousel-item">
          <video className="img-fluid w-100" autoPlay loop muted>
            <source
              href="https://www.youtube.com/watch?v=9aj4dcySTaA&t=45s"
              type="video/mp4"
            />
          </video>
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        {/* Single item */}
        <div className="carousel-item">
          <img
            className="w-100"
            src="/images/sources-homepage/galerie/A110_PURE_6.jpg"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </div>
      </div>
      {/* Inner */}

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselVideoExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselVideoExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
