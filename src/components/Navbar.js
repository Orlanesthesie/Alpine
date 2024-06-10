import React from "react";
import "../css/Home.css";

const Navbar = () => {
  return (
    <div className="text-danger">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <img
          src="/images/LogoA.png"
          class="navbar-logo ml-auto"
          width="40"
          height="auto"
          alt=""
        />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Configurateur
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
