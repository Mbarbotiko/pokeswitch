import React, { Component } from "react";
import "./ScoreboardMessage.css";
import ModalExample from "../Modal";



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
      return "Nice! Keep going!";
    case "incorrect":
      return <ModalExample/>;
    default:
      return "Click a Pokemon to begin!";
    }
  };

  userLoseModal = () =>{

  }

  userWinModal=()=>{
    alert("Oh hey you won")
  }



  render() {
    return (
      <li className={this.state.animating ? this.state.message : ""}>
        {this.renderMessage()}
    
      </li>
    );
  }
}

export default ScoreboardMessage;
