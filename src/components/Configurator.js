import React from "react";
import "../css/Configurator.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Configurator = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-danger">je suis le configurator</h1>
      <Footer />
    </div>
  );
};

export default Configurator;
