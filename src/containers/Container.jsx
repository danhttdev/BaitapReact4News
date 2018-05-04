import React, { Component } from 'react';
import './container.css';
import Main from '../components/Main';
import Navigations from '../components/Navigations';
import { 
  at_togglePermit,
  at_loginCompleted
} from '../actions/actions';
import { connect } from "react-redux";

class Container extends Component {
  componentWillMount(){
    if (localStorage.getItem("username") !== null && localStorage.getItem("password") !== null){
      this.props.at_loginCompleted();
    }
  }
  render() {
    return (
      <div>
        <Navigations />
        <Main/>
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
    at_togglePermit: () =>dispatch(at_togglePermit()),
    at_loginCompleted: () => dispatch(at_loginCompleted()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);