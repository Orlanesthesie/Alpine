import React from "react";
import "../css/Home.css";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Galerie from "./Galerie";
import Conception from "./Conception";
import Configurator from "./Configurator";
import Footer from "./Footer";



const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <section>{/* MADE BY RACERS */}</section>
      <Galerie />
      <Conception />
      <section>{/* PETIT TEXTE */}</section>
      <Configurator />
      <Footer />
    </div>
  );
};

export default Home;
