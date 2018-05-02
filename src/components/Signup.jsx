import React, {Component} from 'react';
import './signup.css';
import { atx_signup} from '../actions/actions'
import { connect } from "react-redux";

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            password2: "",
        }   
    }
    onChangeUsername = e => {
        this.setState({
          username: e.target.value
        })
    }
    onChangePassword = e => {
        this.setState({
          password: e.target.value
        })
    }
    onChangePassword2 = e => {
        this.setState({
          password2: e.target.value
        })
    }
    submit = () => {
        if (this.state.password2 !== "")
        this.props.atx_signup(this.state.username, this.state.password, this.state.password2);
    }
    render(){
        return (
            <div className="signup">
                <span>Username</span>
                <input 
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                />
                <span>Password</span>
                <input 
                    type="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                />
                <span>RePassword</span>
                <input 
                    type="password"
                    value={this.state.password2}
                    onChange={this.onChangePassword2}
                />
                <button 
                   onClick={this.submit}
                    >Submit</button>
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
        atx_signup: (username,password,password2) => dispatch(atx_signup(username,password,password2)),
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(Signup);