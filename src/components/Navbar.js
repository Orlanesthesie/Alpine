import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

const Navbar = () => {
  return (
    <div className="text-danger">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img
          src="/images/LogoA.png"
          className="navbar-logo ml-auto"
          width="40"
          height="auto"
          alt="Logo"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/configurator">
                Configurator
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
