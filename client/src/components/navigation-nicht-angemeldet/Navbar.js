import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import Navbar from "react-bulma-components/dist/react-bulma-components.min.css";

import "./Navigation.css";

const colors = {
  Default: "",
  primary: "primary",
  info: "info",
  danger: "danger",
  warning: "warning",
  success: "success",
  white: "white",
  black: "black",
  light: "light",
  dark: "dark",
  link: "link"
};

class Navigation extends Component {
  state = {
    isActive: false
  };

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };
  render() {
    return <h1>Hallo</h1>;
  }
}

export default Navigation;
