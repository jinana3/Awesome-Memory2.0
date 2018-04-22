import React, { Component } from "react";

class Card extends Component {
  render() {
    //console.log(this.props)
    return (
      <div className = "card">
        <div className="img-container">
          <a onClick={() => this.props.checkSelected(this.props.id)}>
          <img alt={this.props.name} src={this.props.image} />
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
