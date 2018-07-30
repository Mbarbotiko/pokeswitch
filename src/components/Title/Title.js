import React from "react";
import "./Title.css";

const Title = props => 

<div className="jumbotron jumbotron-fluid">
  <div className="title">
    <p className="display-4">{props.children}</p>
    <p className="lead">Test your memory, click on each picture only once, get through all 12 and you will win a sense of pride.</p>
  </div>
  
</div>;

export default Title;
