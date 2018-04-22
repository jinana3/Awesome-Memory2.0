import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";
import cards from "./cards.json";
import Header from "./components/Header";
import Scorebar from "./components/Scorebar";

class App extends Component {
//tutorial: https://www.youtube.com/watch?v=A71aqufiNtQ

  constructor(){
    super();
    this.state={
      message: "Click an image to begin!",
      topScore: 0,
      score: 0,
      cards: cards,
      notSelected: cards
    };
  }

  //lifecycle method that makes sure everything's ready
  componentDidMount(){
  }

  //function to shuffle the cards array so they can render in different order
  shuffle = array => {
    for (let i=array.length - 1; i > 0; i--){
      let j = Math.floor(Math.random()*(i+1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  //when an image is clicked, need to check to make sure it is in none-selected list, otherwise game over
  checkSelected = id => {
    const findCard = this.state.notSelected.find(item => item.id === id);
    if(findCard === undefined){
      this.setState({
        message: "You've picked this one before!",
        topScore: (this.state.score > this.state.topScore) ? this.state.score: this.state.topScore,
        score: 0,
        cards: cards,
        notSelected: cards
      });
    }
    else { //filter remaining list
      const newCards = this.state.notSelected.filter(item=>item.id !==id);
      this.setState({
        message: "You guessed correctly!",
        score: this.state.score + 1,
        cards: cards,
        notSelected: newCards
      })
    }

    this.shuffle(cards); // shuffle cards and display in different order
    //console.log(cards); //this is same as this.staet.cards
    //console.log(this.state.cards);
  }



  render() {
    return (
      <div>
          <Scorebar
            message = {this.state.message}
            site = "Awesome Memory"
            score = {this.state.score}
            topScore = {this.state.topScore}
            />
          <Header title = "Test your Memory!"/>
          <main className = "container">
              {this.state.cards.map(card => (
                <Card
                  id={card.id}
                  key={card.id}
                  name={card.name}
                  image={card.image}
                  checkSelected={this.checkSelected}
                  score={this.state.score}
                />
              ))}
          </main>
      </div>
    );
  }
}

export default App;
