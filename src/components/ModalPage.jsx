// import React from "react";
// import { Button, Modal } from "react-bootstrap";

// class ModalPage extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       show: false,
//     };
//   }
//   handleModal() {
//     this.setState({ show: !this.state.show });
//   }
//   render() {
//     return (
//       <div>
//         <Button
//           onClick={() => {
//             this.handleModal();
//           }}
//           variant="primary"
//         >
//           Confirm
//         </Button>
//         <Modal show={this.state.show}>
//           <Modal.Dialog style={{ width: "95%" }}>
//             <Modal.Header closeButton>
//               <Modal.Title>Modal title</Modal.Title>
//             </Modal.Header>

//             <Modal.Body>
//               <p className="text-dark">Modal body text goes here.</p>
//             </Modal.Body>

//             <Modal.Footer>
//               <Button
//                 onClick={() => {
//                   this.handleModal();
//                 }}
//                 variant="secondary"
//               >
//                 Close
//               </Button>
//               <Button href="/" variant="primary">
//                 Save changes
//               </Button>
//             </Modal.Footer>
//           </Modal.Dialog>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default ModalPage;
