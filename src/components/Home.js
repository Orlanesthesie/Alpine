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
      <section className="made_by_racers">
        <div>
          <h3 className="text-center pt-5 pb-5">MADE BY RACERS</h3>
          <p className="text-center pb-3 p3">
            En 1955, Jean Rédélé, entrepreneur passionné, fonde Alpine sur trois
            piliers : agilité, élégance, esprit de compétition.{" "}
          </p>
          <p className="text-center pb-3 p3">
            Conçue par des pilotes pour ceux qui veulent maîtriser l’asphalte,
            la légende Alpine s’est érigée à travers des victoires mythiques, et
            un engagement sportif sans limite.
          </p>
          <p className="text-center pb-5 p3">
            Depuis 2016, à travers notre nouvelle gamme A 110, nous continuons à
            gravir tous les échelons du sport automobile. Demain, nous voulons
            réinventer la sportivité automobile avec des technologies innovantes
            issues de la Formule 1, pour des pilotes passionnés.
          </p>
        </div>
      </section>
      <Galerie />
      <section className="footer_img d-flex justify-content-center">
        <img className="alpine " src="/images/Alpine_logo_2023.jpg" />
      </section>
      <Conception />
      <Creation />
      <Footer />
    </div>
  );
};

export default Home;
