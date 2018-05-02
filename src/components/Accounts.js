import React, { Component } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { 
  at_togglePermit,
  at_toggleLogin 
} from '../actions/actions';
import { connect } from "react-redux";

class Accounts extends Component {
  render() {
    let a;
    if (this.props.isLogin) {
      a=<div><Login />
        <button onClick={this.props.at_toggleLogin}>Sign up now</button>
        </div>
    }
    else a=<div><Signup />
    <button onClick={this.props.at_toggleLogin}>Login now</button>
    <button onClick={this.props.at_toggleLogin}>Cancel</button>
    </div>
    return (
      <div className="container">
        {a}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}
function mapDispatchToProps(dispatch) {
  return {
    at_togglePermit: ()        => dispatch(at_togglePermit()),
    at_toggleLogin: () => dispatch(at_toggleLogin()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);