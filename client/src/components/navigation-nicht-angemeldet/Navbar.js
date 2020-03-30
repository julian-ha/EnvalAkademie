import React, { Component } from "react";
import "./Navigation.css";

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
    return (
      <div>
        <div className="Navigation-outter">
          <nav
            className="navbar"
            aria-label="main navigation"
            // style={{
            //   borderBottom: "solid 1px #dddddd"
            // }}
          >
            <div className="navbar-brand">
              <a href="#" className="navbar-item">
                <img
                  src="https://enval.de/images/logo_slogan.svg"
                  width="100px"
                  alt=""
                />
                <span>Akademie</span>
              </a>
              <button className="button navbar-burger" onClick={this.toggleNav}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            <div
              className={
                this.state.isActive ? "navbar-menu is-active" : "navbar-menu"
              }
            >
              <div className="navbar-start">
                <a className="navbar-item" href="#">
                  Code Blog
                </a>
                <a className="navbar-item" href="#">
                  Medium
                </a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link" href="#">
                    Projects
                  </a>
                  <div className="navbar-dropdown">
                    <hr className="navbar-divider" />
                    <a className="navbar-item" href="#">
                      Angular The React Way
                    </a>
                  </div>
                </div>
              </div>
              <div className="navbar-end">
                <a className="navbar-item button is-primary" href="#">
                  Resume
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navigation;
