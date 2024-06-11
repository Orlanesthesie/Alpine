import React from "react";
import { useDispatch, useSelector } from "react-redux";


const Button_config = () => {
  const coucou = () => {
    console.log("ppl");
  };

  return (
    <div>
      <img
        className="button_config"
        src="/images/configurateur/couleurs/selection/blanc.jpg"
        onClick={coucou}
      />
      <img
        className="button_config"
        src="/images/configurateur/couleurs/selection/bleu.jpg"
        onClick={coucou}
      />
      <img
        className="button_config"
        src="/images/configurateur/couleurs/selection/noir.jpg"
        onClick={coucou}
      />
    </div>
  );
};

export default Button_config;
