import React, { Component } from "react";
import "./ScoreboardMessage.css";
import yay from './win1.gif';



class ScoreboardMessage extends Component {
  state = {
    message: "",
    animating: false
  };

  componentWillReceiveProps({ score, topScore }) {
    const newState = { animating: true };
    if (score === 0 && topScore === 0) {
      newState.message = "";
    } else if (score === 0 && topScore > 0) {
      newState.message = "incorrect";
    } else {
      newState.message = "correct";
    }
    this.setState(newState, () =>
      setTimeout(() => this.setState({ animating: false }), 500)
    );
  }


  renderMessage = () => {
    switch (this.state.message) {
    case "correct":
      return <img src={yay} width="100" height="50" />;
    case "incorrect":
      return "Uh oh you lose!";
    default:
      return "Click a Pokemon to begin!";
    }
  };

  render() {
    return (
      <li className={this.state.animating ? this.state.message : ""}>
        {this.renderMessage()}
      </li>
    );
  }
}

export default ScoreboardMessage;
