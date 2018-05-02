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
        // let menu;
        // //console.log(localStorage.getItem('username')+"---"+localStorage.getItem("password"));
        // if (localStorage.getItem('username') !== null && localStorage.getItem("password") !== null){
        //     menu = (<li><Link to="/logout">Log Out</Link></li>);
            
        // } else {
        //     menu = "";
        // }

        console.log(this.props.path);
        return (
            <div>
                <ul>
                    {/* <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/news">News</Link></li>
                    {menu} */}
                    {
                        this.props.path.map((item, index) => {
                            return (<li key={index}><Link to={item.path}>{item.name}</Link></li>)
                        })
                    }

                </ul>
            </div>
        );
        
 
    }
}

//export default Navigations;

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