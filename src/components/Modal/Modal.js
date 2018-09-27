import React from "react";
import "./Modal.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import loser from "../../lose/lose1.gif"
import InnerModal from "../InnerModal"
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
  
    render() {
      return (
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle} >You Lose</ModalHeader>
            <ModalBody>
            <img src={loser} width='100%' alt='you lose'/>
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={this.toggle}>Try Again</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }
  
  export default PokeModal;
