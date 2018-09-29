import React from "react";
import "./Modal.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import InnerModal from "../InnerModal"
import loser from "../../loser.json"
import winner from "../../winner.json"

class PokeModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: true
      };
  
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
    
  
   //run a math random function to cycle through pokemon loser / winner object 
    render() {
      var randomNum=Math.floor(Math.random()*5);
      console.log(randomNum);
      return (
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalBody>
           <InnerModal image={loser[randomNum].image}
           message={loser[randomNum].message} />
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={this.toggle}
              >Try Again</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
      
    }
  
  }
  
  export default PokeModal;
