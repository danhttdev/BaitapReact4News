import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './navigations.css'
import { connect } from "react-redux";
import { at_logoutCompleted} from '../actions/actionAccount'
import $ from 'jquery'; 

class Navigations extends Component {
        
    logout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        this.props.at_logoutCompleted();
        $('.navme>li>a').removeClass("focus");
        $('.navme>li:nth-child(' + 2 + ') a').addClass("focus");

    }
    render() {
        let logout = "";
        if (localStorage.getItem('username') !== null) 
        logout = <li>
                    <Link to="/login" onClick={this.logout}>Logout ({localStorage.getItem('username')})</Link>
                </li>
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <ul className="nav navbar-nav navme"> 
                        {
                            this.props.path.map((item, index) => {
                                return (    <li key={index}>
                                                <Link to={item.path}>{item.name}</Link>
                                            </li>)
                            })
                        } {logout}
                    </ul>
                   
                </nav>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      path: state.reducerCommon.path
    };
}
function mapDispatchToProps(dispatch) {
    return {
        at_logoutCompleted: ()=> dispatch(at_logoutCompleted ()),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Navigations);