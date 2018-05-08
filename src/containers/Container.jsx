import React, { Component } from 'react';
import './container.css';
import Main from './Main';
import Navigations from './Navigations';
import {  at_loginCompleted  } from '../actions/actionAccount';
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    at_loginCompleted: () => dispatch(at_loginCompleted()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);