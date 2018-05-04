import React, { Component } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { 
  at_togglePermit,
  at_toggleLogin,
  at_login
} from '../actions/actions';
import { connect } from "react-redux";

class Accounts extends Component {
  componentWillMount() {
    this.props.at_login();
  }

  render() {
    let a;
    if (this.props.isLogin) {
      a=<div>
          <Login history2={this.props.history}/>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 btnClick">
            <a className="btn btn-warning centered" onClick={this.props.at_toggleLogin}>Sign up now</a>
          </div>
        </div>
    }
    else a=<div>
              <Signup history2={this.props.history}/>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 btnClick">
                <a className="btn btn-warning" onClick={this.props.at_toggleLogin}>Login now</a>
                <a className="btn btn-danger" onClick={this.props.at_toggleLogin}>Cancel</a>
              </div>
              
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
    at_togglePermit: () => dispatch(at_togglePermit()),
    at_toggleLogin: ()  => dispatch(at_toggleLogin()),
    at_login: ()        => dispatch(at_login()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);