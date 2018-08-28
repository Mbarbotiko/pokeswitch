import React from "react";
import "./Scoreboard.css";
import ScoreboardMessage from "../ScoreboardMessage";


const Scoreboard = props => (
  <div>
    <nav className="navbar fixed-bottom navbar-light bg-light">
      <h1 className="navbar-brand" >Score: {props.score}</h1>
      <h1 className="navbar-brand">Top Score: {props.topScore}</h1>
      <ScoreboardMessage score={props.score} topScore={props.topScore} />
    </nav>
  </div>
);

export default Scoreboard;
