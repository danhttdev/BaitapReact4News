import React, { Component } from 'react';
import './container.css';
import Main from '../components/Main';
import Navigations from '../components/Navigations';

import { 
  at_togglePermit
} from '../actions/actions';
import { connect } from "react-redux";

class Container extends Component {
  render() {
    return (
      <div>
        <Navigations />
        <br />
        <br />
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
    at_togglePermit: () =>dispatch(at_togglePermit())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);