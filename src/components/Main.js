import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Home from './home/Home';
import Accounts from './Accounts';
import Logout from './Logout';
import AddNews from './addnews/AddNews';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Route exact path="/logout" component={Logout}/>
                <Route exact path="/addnews" component={AddNews}/>
                <Route exact path="/login" component={Accounts} />
                <Route exact path="/" component={Home} />
            </div>
        );
    }
}

export default Main;
