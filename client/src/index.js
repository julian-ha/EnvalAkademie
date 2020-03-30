import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Startseite from "./startseite/startseite";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Startseite />
  </React.StrictMode>,
  document.getElementById("main")
);

serviceWorker.unregister();
