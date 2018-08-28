import React from "react";
import "./Scoreboard.css";
import ScoreboardMessage from "../ScoreboardMessage";


const Scoreboard = props => (
  <div className="scoreboard">
    <nav className="navbar fixed-bottom navbar-light bg-light">
      <h1 className="navbar-brand" >Score: {props.score}</h1>
      <ScoreboardMessage score={props.score} topScore={props.topScore} />
      <h1 className="navbar-brand">Top Score: {props.topScore}</h1>
      
    </nav>
  </div>
);

export default Scoreboard;
