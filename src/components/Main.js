import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Home from './home/Home';
import Accounts from './Accounts';
import Logout from './Logout';

class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path="/logout" component={Logout}/>
                <Route exact path="/login" component={Accounts} />
                <Route exact path="/" component={Home} />
            </div>
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