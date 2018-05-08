import React, { Component } from 'react';
import './container.css';
import Main from './Main';
import Navigations from './Navigations';
import {  at_loginCompleted  } from '../actions/actionAccount';
import { connect } from "react-redux";

class Container extends Component {
  componentWillMount(){
    if (localStorage.getItem("username") !== null && localStorage.getItem("password") !== null){
      this.props.at_loginCompleted(localStorage.getItem("username"),localStorage.getItem("password"));
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

const mapDispatchToProps = {
  at_loginCompleted
}

export default connect(null, mapDispatchToProps)(Container);