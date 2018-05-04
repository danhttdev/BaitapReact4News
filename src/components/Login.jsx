import React, {Component} from 'react';
import './login.css';
import { 
    atx_login,
    atx_getData,
} from '../actions/actions'
import { connect } from "react-redux";

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

    submit = () => {
        if (this.state.username === "" || this.state.password === "") alert("INPUT ERROR");
        else{
            this.props.atx_login(this.state.username, this.state.password);
            this.props.atx_getData();
            this.props.history2.push("/");
        }
    }

    render(){
        return (
            <div>
                <form onSubmit={this.submit}>
                    <legend>Login now</legend>
                    <div className="form-group">
                        <label htmlFor="">Username</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="username-login" 
                            placeholder="Input field" 
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        /> 
                        <label htmlFor="">Password</label>
                        <input 
                            className="form-control" 
                            id="password-login" 
                            placeholder="Input field" 
                            type="password"
                            value={this.state.password}
                            onChange={this.onChangePassword}
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
        atx_login: (username,password) => dispatch(atx_login(username,password)),
        atx_getData: () => dispatch(atx_getData()),
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(Login);