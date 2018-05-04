import React, {Component} from 'react';
import { 
    atx_addnews,
    atx_getData
} from '../.././actions/actions';
import { connect } from "react-redux";

class AddNews extends Component {
    constructor(props){
        super(props);
        this.state = {
            content: "",
        }   
    }
    onChangeContent = e => {
        this.setState({
            content: e.target.value
        })
    }
    submit = (e) => {
        e.preventDefault();
        if (this.state.content === "" ) {
            alert("INPUT ERROR");//this.props.history.push("/addnews");     
            //console.log(this.props.history);
        }
        else{
            console.log(this.props.history);
            this.props.atx_addnews(localStorage.getItem('username'),this.state.content);
            $('.navbar-inverse .navbar-nav>li:nth-child(' + 1 + ') a').addClass("focus");
            this.props.history.push("/");
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label htmlFor="">Your new status: </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="username-login" 
                            placeholder="Input field" 
                            value={this.state.content}
                            onChange={this.onChangeContent}
                        /> 
                    </div>
                    <button type="submit" className="btn btn-primary">Post now !</button>
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
        atx_addnews:(username,content) => dispatch(atx_addnews(username,content)),
        atx_getData: () => dispatch(atx_getData())
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(AddNews);