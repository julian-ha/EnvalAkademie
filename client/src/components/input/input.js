import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Test"
    };
  }

  render() {
    return (
      <input
        id={this.props.id}
        name={this.props.name}
        class={"input " + this.props.class}
        type={this.props.type}
      ></input>
    );
  }
}

class Inputfield extends Component {
  renderInput(id, name, classe, type) {
    return <Input id={id} name={name} class={classe} type={type} />;
  }
  render() {
    return (
      <div class="field">
        <label class="label">ASDFasdfasdf</label>
        <div>
          {this.renderInput(this.props.id, "testname", "testclass", "text")}
        </div>
      </div>
    );
  }
}

export default Inputfield;
