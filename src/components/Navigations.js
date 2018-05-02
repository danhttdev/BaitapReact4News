import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './navigations.css'

class Navigations extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/newsabout">News</Link></li>
                </ul>
            </div>
        );
    }
}

export default Navigations;