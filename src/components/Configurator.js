import React from "react";
import "../css/Configurator.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Ariane_config from "./configurator/Ariane_config";
import Carousel_config from "./configurator/Carousel_config";
import Button_config from "./configurator/Button_config";
import { Provider } from "react-redux";
import store from "../store/store";

const Configurator = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Ariane_config />
        <Carousel_config />
        <Button_config />
        <Footer />
      </div>
    </Provider>
  );
};

export default Configurator;