import React, {Component} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import axios from 'axios';

export default class AddCardModal extends Component {
   
  constructor(props){
    super(props);
    

    this.state={
      successModalShow: false,

    }
  
  }


  
  render(){

    return (
         <Modal
           {...this.props}
           size="lg"
           aria-labelledby="contained-modal-title-vcenter"
           centered
         >
           
           <Modal.Header closeButton>
            
           </Modal.Header>
           <Modal.Body>
             
            <h4>{this.props.feedbackMsg}</h4>
           </Modal.Body>
           <Modal.Footer>
           <Button variant = "primary" onClick={this.props.onHide}>Back</Button>
           </Modal.Footer>
           
         </Modal>
    );
  }
  
}