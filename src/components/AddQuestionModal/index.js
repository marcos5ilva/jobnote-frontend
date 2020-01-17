import React, {Component} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';


export default class AddQuestionModal extends Component {
  
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    

    this.state={
      addQuestionModalShow: false,
      question: '',
      answer:'',
    }
  
  }

 

  onChangeHandler(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    const interviewQuestions = [{
      question: this.state.question,
      answer: this.state.answer,
      
    }];


    this.props.addQuestion({interviewQuestions}, this.props.card);
    this.setState({ question: '',
    answer:'',})
  }
  
  render(){

    return (
         <Modal
           {...this.props}
           size="lg"
           aria-labelledby="contained-modal-title-vcenter"
          
           autoFocus="true"
         >
           <form onSubmit = {this.onSubmit}>
           <Modal.Header closeButton>
             <Modal.Title id="contained-modal-title-vcenter">
               Add Interview Question
             </Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <h4>New interview question</h4>
             
              <div className="form-group row">
                <div className ="col-10">
                  <textarea rows="5" cols="80"  className="form-control" 
                    name="question" 
                    id="question" 
                    placeholder="Enter interview question" 
                    required
                    value = {this.state.question}
                    onChange = {this.onChangeHandler}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className ="col-10">
                  <textarea rows="10" cols="80" className="form-control"
                    name="answer" 
                    id="answer" 
                    placeholder="Enter answer" 
                    required
                    value = {this.state.answer}
                    onChange = {this.onChangeHandler}
                  />
                </div>
              </div>
            
          
           </Modal.Body>
           <Modal.Footer>
             <Button type="submit" onClick={this.props.onHide}>Add question</Button>
           </Modal.Footer>
           </form>
         </Modal>
    );
  }
  
}