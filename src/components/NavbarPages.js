import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

export default class NavbarPages  extends Component{
 
    constructor(props){
        super(props);
        //this.handleSuccessfullAuth = this.handleSuccessfullAuth.bind(this);
        //this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {loggedInStatus: false};  
      }
    
    //   handleSuccessfullAuth(data) {
    //     this.setState({loggedInStatus: true});
    //     console.log('onClick');
    //   }
    
    //   handleLogoutClick() {
    //     this.setState({loggedInStatus: false});
        
    //   }
    
    render(){

        //const isLoggedIn = this.props.isLoggedIn;
        //console.log(isLoggedIn)
        return(
      
            <Navbar  >
                <Navbar.Brand href="/" id="textBrand" >
                        <img
                        src="/img/jobnoteLogoBrand.png"
                        alt ="Job Note Logo"
                        /> JOBnote
                        </Navbar.Brand>
                {!this.props.loggedInStatus?(<Nav className="text-right" >
                    <Nav.Item className="justify-content-end " >
                        <Nav.Link  href="/signin" eventKey="1" >login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/signup"  eventKey="2">sign up</Nav.Link>
                    </Nav.Item>
                    
                </Nav>):(
                    <Nav className="text-right" >
                    <Nav.Item className="justify-content-end ">
                        <Nav.Link href="/" onClick ={this.props.handleLogout}>logout</Nav.Link>
                    </Nav.Item>
                    
                    
                </Nav>)}
            </Navbar>
        )
    }
}


