import React, {Component} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import axios from 'axios';

export default class AddCardModal extends Component {
   
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    

    this.state={
      addCardModalShow: false,
      companyName: '',
      jobTitle:'',
      salary: '',
      jobPostURL: '',
      note: '',

    }
  
  }

 

  onChangeHandler(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    const card = { cards :[{
      companyName: this.state.companyName,
      jobTitle: this.state.jobTitle,
      salary: this.state.salary,
      jobPostURL: this.state.jobPostURL,
      note: this.state.note,
    }]}

    this.props.addCard(card);
    // axios.patch('http://localhost:5000/cards/add/5dc7786edce42e2fa6b761f3',card)
    // .then(res => console.log(res.data))
    // .catch(e => console.log(e));

  
    console.log('new card  added:')
    console.log(card);
    
  }
  
  render(){

    return (
         <Modal
           {...this.props}
           size="lg"
           aria-labelledby="contained-modal-title-vcenter"
           centered
         >
           <form onSubmit = {this.onSubmit}>
           <Modal.Header closeButton>
             <Modal.Title id="contained-modal-title-vcenter">
               Add Card
             </Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <h4>New job application</h4>
             
              <div className="form-group row">
                <div className ="col-10">
                  <input type="text" className="form-control" 
                    name="companyName" 
                    id="companyName" 
                    placeholder="Enter comapany's name" 
                    required
                    value = {this.state.companyName}
                    onChange = {this.onChangeHandler}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className ="col-10">
                  <input type="text" className="form-control"
                    name="jobTitle" 
                    id="jobTitle" 
                    placeholder="Enter Job Title" 
                    required
                    value = {this.state.jobTitle}
                    onChange = {this.onChangeHandler}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className ="col-10">
                  <input type="text" className="form-control" 
                    name="salary" 
                    id="salary" 
                    placeholder="Enter salary" 
                    value = {this.state.salary}
                    onChange = {this.onChangeHandler}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className ="col-10">
                  <input type="text" className="form-control" 
                    name="jobPostURL" 
                    id="jobPostURL" 
                    placeholder="Enter job post URL" 
                    value = {this.state.jobPostURL}
                    onChange = {this.onChangeHandler}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className ="col-10">
                  <textarea rows="4" cols="50"  className="form-control" 
                    name="note" 
                    id="note" 
                    placeholder="Enter job annotation" 
                    value = {this.state.note}
                    onChange = {this.onChangeHandler}
                  />
                </div>
              </div>
            
           </Modal.Body>
           <Modal.Footer>
             <Button type="submit" onClick={this.props.onHide}>Add job</Button>
           </Modal.Footer>
           </form>
         </Modal>
    );
  }
  
}