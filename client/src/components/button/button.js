import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button
        id={this.props.id}
        className={"button " + this.props.class}
        name={this.props.name}
      >
        {this.props.innerhtml}
      </button>
    );
  }
}
export default Button;
