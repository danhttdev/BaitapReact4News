import React, {Component} from 'react';
import './signup.css';
import { 
    atx_signup,
    at_logoutCompleted
} from '../actions/actionAccount';
import { connect } from "react-redux";
import { PASSWORD_NO_MATCH } from '../constants/constants';
import $ from 'jquery'; 

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
        if (this.state.password !== this.state.password2) alert(PASSWORD_NO_MATCH);
        else {
            const success = () => {
                this.props.history.push("/login");
            }
            this.props.atx_signup(this.state.username, this.state.password, this.state.password2, success);
        }
    }

    login = () => {
        this.props.history.push("/login");
    }
    componentWillMount(){
        if (localStorage.getItem('username') !==null) {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            this.props.at_logoutCompleted();
        }
        $('.navme>li>a').removeClass("focus");
    }
    componentDidMount(){
        setTimeout(()=>{
            let indexindex = 1;
            $('.navme').html().split("/li").forEach((item, index)=>{
            if (window.location.pathname === '/') indexindex=1;
            if (item.includes(window.location.pathname)) indexindex=index+1;
            });
            $('.navme>li>a').removeClass("focus");
            $('.navme>li:nth-child(' + indexindex + ') a').addClass("focus");
        });
    }
    render(){
        return (
            <div>
                <form onSubmit={this.submitSignup}>
                    <legend>Sign up now</legend>
                    <div className="form-group">
                        <label htmlFor="">Username</label>
                        <input 
                            autoFocus
                            type="text" 
                            className="form-control" 
                            id="username" 
                            placeholder="Input field" 
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            required
                        /> 
                        <label htmlFor="">Password</label>
                        <input 
                            className="form-control" 
                            id="password" 
                            placeholder="Input field" 
                            type="password"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            required
                        /> 
                        <label htmlFor="">Re-password</label>
                        <input 
                            className="form-control" 
                            id="password2" 
                            placeholder="Input field" 
                            type="password"
                            value={this.state.password2}
                            onChange={this.onChangePassword2}
                            required
                        /> 
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 btnClick">
                    <a className="btn btn-warning" onClick={this.login}>Login now</a>
                    <a className="btn btn-danger" onClick={this.login}>Cancel</a>
                </div>
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
        atx_signup: (username,password,password2, link) => dispatch(atx_signup(username,password,password2, link)),
        at_logoutCompleted: () => dispatch(at_logoutCompleted()),
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(Signup);