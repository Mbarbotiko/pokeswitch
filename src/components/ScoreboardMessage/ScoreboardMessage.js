import React, { Component } from "react";
import "./ScoreboardMessage.css";
import LoserModal from "../LoserModal";
import WinnerModal from "../WinnerModal";



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
    } else if (score === 12) {
      newState.message = "winner"
    }
    else {
      newState.message = "correct";
    }
    this.setState(newState, () =>
      setTimeout(() => this.setState({ animating: false }), 500)
    );
  }


  renderMessage = () => {

    switch (this.state.message) {
      case "correct":
        return "Nice! Keep going!"
      case "winner":
      return <WinnerModal/>
      case "incorrect":
        return <LoserModal />
      default:
        return "Click a Pokemon to begin!";
    }
  };


  render() {
    return (
      <ul className={this.state.animating ? this.state.message : ""}>
        {this.renderMessage()}
      </ul>
    );
  }
}

export default ScoreboardMessage;
