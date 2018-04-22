import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className = "header">
        <h1>{this.props.title}</h1>
        <h2>Click on each image only once</h2>
      </header>
    );
  }
}

export default Header;
