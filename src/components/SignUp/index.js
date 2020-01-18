import React, {Component} from 'react';
import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

export default class SignUp  extends Component{
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);

        this.state={
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }
    }

    onChangeHandler(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
   
    onSubmit(e){
        e.preventDefault();

        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
        }

        axios.post(baseURL+'users/add', user)
            .then( res =>{
                if(res.data.status === 'created'){
                    this.props.handleSuccessfulAuth()
                }
            } )
            .catch(e => console.log(e));

            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            });
        //window.location = '/';
    }

    render(){
        return (
            <React.Fragment>
                <div className="row  justify-content-center verticalAlignment">
                    <form className="col-4 " onSubmit = {this.onSubmit}>
                        <div className="card signUPsignInCard">
                            <div className="card-body">
                                <div className="form-group row">
                                    <i className="fa fa-user  fa-2x col-2" aria-hidden="true"></i>
                                    <div className="col-10">
                                        <input type="text" className="form-control " name= "firstName" id="firsNameInput" placeholder="First Name"
                                        required
                                        value = {this.state.firstName}
                                        onChange={this.onChangeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <i className="fa fa-user-plus fa-2x col-2" aria-hidden="true"></i>
                                    <div className="col-10">
                                        <input type="text" className="form-control " name="lastName" id="lastNameInput" placeholder="Last Name"
                                        required
                                        value = {this.state.lastName}
                                        onChange={this.onChangeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <i className="fa fa-envelope fa-2x col-2" aria-hidden="true"></i>
                                    <div className="col-10">
                                        <input type="text" className="form-control " name="email" id="lastNameInput" placeholder="Email"
                                        required
                                        value = {this.state.email}
                                        onChange={this.onChangeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <i className="fa fa-lock fa-2x col-2 fa-icon-blue" aria-hidden="true"></i>
                                    <div className="col-10">
                                        <input type="password" className="form-control " name ="password" id="passwordInput" placeholder="Password"
                                        required
                                        value = {this.state.password}
                                        onChange={this.onChangeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row ">
                                    <div className="col-12">
                                        <input type="submit" value="Sign Up" className="form-control btn btn-primary " id="signUPButton" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )

    }
}