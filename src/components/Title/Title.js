import React from "react";
import "./Title.css";

const Title = props => 

<div class="jumbotron jumbotron-fluid">
  <div class="title">
    <p class="display-4">{props.children}</p>
    <p class="lead">Test your memory, click on each picture only once, get through all 12 and you will win a sense of pride.</p>
  </div>
  
</div>;

export default Title;
