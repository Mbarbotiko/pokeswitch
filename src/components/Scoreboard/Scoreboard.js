import React from "react";
import "./Scoreboard.css";
import ScoreboardMessage from "../ScoreboardMessage";
import Scorebox from "../Scorebox";



const Scoreboard = props => (
  <div className="scoreboard">
    <nav className="navbar fixed-bottom navbar-light bg-light">
      <Scorebox score={props.score}>
      <h1>Your Score:</h1>
      </Scorebox>
      <Scorebox>
      <ScoreboardMessage score={props.score} topScore={props.topScore} />
      </Scorebox>

      <Scorebox topScore={props.topScore}>
      <h1>Top Score:</h1>
      </Scorebox>

    </nav>
  </div>
);

export default Scoreboard;
