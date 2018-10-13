import React from "react";
import "./WinnerModal.css";
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import InnerModal from "../InnerModal"
import winner from "../../winner.json"
const randomNum=Math.floor(Math.random()*5);

class WinnerModal extends React.Component {
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
      
      console.log(randomNum);
      return (
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalBody>
           <InnerModal image={winner[randomNum].image}
           message={winner[randomNum].message} />
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
  
  export default WinnerModal;
