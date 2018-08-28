import React from "react";
import "./Scorebox.css";



const Scorebox = props => (
  <div className="scorebox">
  
<h1>{props.children}{props.score}{props.topScore}</h1>

    
  </div>
);

export default Scorebox;
