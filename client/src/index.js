import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navigation from "./components/navigation-nicht-angemeldet/Navbar";
import Startseite from "./startseite/startseite";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Startseite />
  </React.StrictMode>,
  document.getElementById("main")
);

serviceWorker.unregister();
