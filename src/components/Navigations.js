import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './navigations.css'
import { 
    at_loginCompleted,
    at_logoutCompleted
} from '../actions/actions';
import { connect } from "react-redux";

class Navigations extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <ul className="nav navbar-nav"> 
                        {
                            this.props.path.map((item, index) => {
                                return (<li key={index}><Link to={item.path}>{item.name}</Link></li>)
                            })
                        }
                    </ul>
                </nav>
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
        at_loginCompleted: () => dispatch(at_loginCompleted()),
        at_logoutCompleted: () => dispatch(at_logoutCompleted())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Navigations);