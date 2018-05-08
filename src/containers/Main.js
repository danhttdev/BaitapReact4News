import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './Home';
import AddNews from './AddNews';
import Signup from './Signup';
import Login from './Login';

class Main extends Component {

    render() {
        return (
            <div className="main">
                <Route exact path="/addnews" component={AddNews}/>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/" component={Home} />
            </div>
        );
    }
}

export default Main;
