import React, { Component } from 'react';
import { 
    atx_like,
    atx_delete_news,
    atx_editnews
} from '../../actions/actionNews';
import {connect} from 'react-redux';

class ItemNews extends Component {
    constructor(props){
        super(props);
        this.state = {
            tagEditable: false,
            content: this.props.content
        }
    }

    clickLike = () => {
        if ( localStorage.getItem('username') === null && localStorage.getItem('password') === null) {
            this.props.history2.push("/login");
        }
        else {
            this.props.atx_like(this.props.id);
        }
    }

    deleteNews = (id) => {
        if (!this.state.tagEditable){
            this.props.atx_delete_news(id);
        }
    }

    edit = (id) => {
        this.setState({
            content: this.props.content,
        });
        const a = this.state.tagEditable;
        this.setState({
            tagEditable: !a,
        })
        if (this.state.tagEditable) {
            this.props.atx_editnews(this.props.id,this.state.content);
        }
    }

    onEdit = e => {
        this.setState({
          content: e.target.value
        })
    }

    render() {
        let a="";
        let b=this.props.content;
        if (this.props.isAdmin){
            a = <div><a className="btn btn-danger" onClick={() =>this.deleteNews(this.props.id)}>X</a>
            <a className="btn btn-warning" onClick={() =>this.edit(this.props.id)}>Edit</a></div>
        }
        if (this.state.tagEditable){
            b = <input value={this.state.content} className="edit" onChange={this.onEdit}/>
        }
        return (
            <div>
                <span className="tittle">Người đăng: {this.props.username}</span>
                <span>Nội dung: <span></span>{b}</span>
                <a className="btn btn-primary" onClick={this.clickLike}>Like {this.props.countlike}</a>
                {a}
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
        atx_like: (idnewslike) => dispatch(atx_like(idnewslike)),
        atx_delete_news: (id) => dispatch(atx_delete_news(id)),
        atx_editnews:(id,content) => dispatch(atx_editnews(id,content))
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(ItemNews);