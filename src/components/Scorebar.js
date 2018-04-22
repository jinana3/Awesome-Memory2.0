import React, { Component } from "react";

class Scorebar extends Component {
  render() {
    return (
        <nav className="navbar navbar-inverse">
            <li><a href="/" style={{color: "red"}}>{this.props.site}</a></li>
            <li>{this.props.message}</li>
            <li>Score: <span style={{color: "red"}}>{this.props.score}</span> | Top Score: {this.props.topScore}</li>
        </nav>
    );
  }
}

export default Scorebar;
