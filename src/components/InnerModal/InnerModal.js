import React from "react";
import "./InnerModal.css";

const InnerModal = props => (<div className="img-container">
<img alt={props.id} src={props.image}/>
<p>{props.message}</p>
</div>

)

export default InnerModal;
