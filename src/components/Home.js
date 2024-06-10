import React from "react";
import "../css/Home.css";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Galerie from "./Galerie";
import Conception from "./Conception";
import Footer from "./Footer";
import Creation from "./Creation";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <section>{/* MADE BY RACERS */}</section>
      <Galerie />
      <Conception />
      <section>{/* PETIT TEXTE */}</section>
      <Creation />
      <Footer />
    </div>
  );
};

export default Home;
