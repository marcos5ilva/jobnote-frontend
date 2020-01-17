import React from 'react';

import { Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Board from './components/Board';


const Routes = ({loggedInStatus, handleSuccessfullAuth})=>(
            
            <Switch>
                
                <Route 
                exact
                path={"/"} 
                render = {() =>(
                    <HomePage  loggedInStatus = {loggedInStatus}/>
                )} />
                <Route path="/signup" component = {SignUp}/>
                <Route
                 path={"/signin"}
                 render={(props)=>(
                     <SignIn {...props} loggedInStatus = {loggedInStatus} handleSuccessfullAuth={handleSuccessfullAuth}/>
                 )} />
                <Route path={"/board"}
                render ={(props)=>(
                    <Board {...props} />
                )} exact/>
                <Route path="/about" component = {AboutPage} />    
            </Switch> 
             
    
);

export default Routes;