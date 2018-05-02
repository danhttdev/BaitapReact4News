import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './home/Home';
import Accounts from './Accounts';

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Accounts} />
            </Switch>
        );
    }
}

export default Main;


// export default  () => (
//     <Switch>
//       <Route exact path="/" component={Home} /> 
//       <Route exact path="/login" component={Accounts} />
//     </Switch>
//   )