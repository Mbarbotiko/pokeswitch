import React from "react";
import "./Modal.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import loser from "../../lose/lose1.gif"

class ModalExample extends React.Component {
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
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
            <img src={loser} alt='you lose'/>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }
  
  export default ModalExample;
