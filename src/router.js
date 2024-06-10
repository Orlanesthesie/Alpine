import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Configurator from "./components/Configurator";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/configurator",
    element: <Configurator />,
  },
]);

export default router;
