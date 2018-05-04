import React, {Component} from 'react';
import './signup.css';
import { 
    atx_signup,
    at_login
} from '../actions/actions'
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

    submitSignup = (e) => {
        e.preventDefault();
        if (this.state.username === "" || this.state.password === "" || this.state.password2 === "" || this.state.password !== this.state.password2 ) alert("INPUT ERROR");
        else
        this.props.atx_signup(this.state.username, this.state.password, this.state.password2);
    }

    render(){
        return (
            <div>
                <form onSubmit={this.submitSignup}>
                    <legend>Sign up now</legend>
                    <div className="form-group">
                        <label htmlFor="">Username</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="username" 
                            placeholder="Input field" 
                            value={this.state.username}
                            onChange={this.onChangeUsername}/> 
                        <label htmlFor="">Password</label>
                        <input 
                            className="form-control" 
                            id="password" 
                            placeholder="Input field" 
                            type="password"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        /> 
                        <label htmlFor="">Re-password</label>
                        <input 
                            className="form-control" 
                            id="password2" 
                            placeholder="Input field" 
                            type="password"
                            value={this.state.password2}
                            onChange={this.onChangePassword2}
                        /> 
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
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
        at_login: ()        => dispatch(at_login()),

    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(Signup);