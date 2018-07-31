import React from "react";
import "./Modal.css";
import { ButtonToolbar} from 'react-bootstrap';
import { Button} from 'react-bootstrap';
import { Modal} from 'react-bootstrap';
// const Modal = props => (

// );

// class MySmallModal extends React.Component {
//   render() {
//     return (
//       <Modal
//         {...this.props}
//         bsSize="small"
//         aria-labelledby="contained-modal-title-sm"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-sm">Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <h4>Wrapped Text</h4>
//           <p>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//             dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
//             ac consectetur ac, vestibulum at eros.
//           </p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={this.props.onHide}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   }
// }

// class App extends React.Component {
//   constructor(props, context) {
//     super(props, context);

//     this.state = {
//       smShow: false,

//     };
//   }
//   render() {
//     let smClose = () => this.setState({ smShow: false });


//     return (
//       <ButtonToolbar>
//         <Button
//           bsStyle="primary"
//           onClick={() => this.setState({ smShow: true })}
//         >
//           Launch small demo modal
//         </Button>


//         <MySmallModal show={this.state.smShow} onHide={smClose} />
//       </ButtonToolbar>
//     );
//   }
// }


// export default MySmallModal;
