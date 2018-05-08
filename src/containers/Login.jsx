import React, {Component} from 'react';
import './login.css';
import { 
    atx_login,
} from '../actions/actionAccount';
import {
    atx_getData
} from '../actions/actionNews';
import { connect } from "react-redux";
import $ from 'jquery'; 

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
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

    submit = (e) => {
        e.preventDefault();
        if (this.state.username === "" || this.state.password === "") alert("INPUT ERROR");
        else{
            const cb_success = () => {
                localStorage.setItem("username", this.state.username);
                localStorage.setItem("password", this.state.password);
                $('.navme>li>a').removeClass("focus");
                $('.navme>li:nth-child(' + 1 + ') a').addClass("focus");
                this.props.history.push("/");
            }
            this.props.atx_login(this.state.username, this.state.password, cb_success); 
        }
    }
    signup = () => {
        this.props.history.push("/signup");
    }
    componentWillMount(){
        if (localStorage.getItem('username') !== null)
        this.props.history.push("/");
    }
    componentDidMount(){
        let indexindex = 1;
        $('.navme').html().split("/li").forEach((item, index)=>{
          if (window.location.pathname === '/') indexindex=1;
          if (item.includes(window.location.pathname)) indexindex=index+1;
        });
        $('.navme>li>a').removeClass("focus");
        $('.navme>li:nth-child(' + indexindex + ') a').addClass("focus");
    }
    render(){
        return (
            <div>
                <form onSubmit={this.submit}>
                    <legend>Login now</legend>
                    <div className="form-group">
                        <label htmlFor="">Username</label>
                        <input 
                            autoFocus
                            type="text" 
                            className="form-control" 
                            id="username-login" 
                            placeholder="Input field" 
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            required
                        /> 
                        <label htmlFor="">Password</label>
                        <input 
                            className="form-control" 
                            id="password-login" 
                            placeholder="Input field" 
                            type="password"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            required
                        /> 
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    
                </form>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 btnClick">
                    <a className="btn btn-warning centered" onClick={this.signup}>Sign up now</a>
                </div>
            </div>
            
        );
    }
}

const mapDispatchToProps = {
    atx_login,
    atx_getData
}
  
export default connect(null,mapDispatchToProps)(Login);