import axios from 'axios';
import {
    TOGGLE_PERMIT,
    TOGGLE_LOGIN,
    HOST,
    GET_NEWS,
    LOGIN_COMPLETED,
    LOGOUT_COMPLETED,
    LIKE,
    DELETE_NEWS,
    ADD_NEWS,
    LOGIN,
    EDIT_NEWS
} from '../constants/constants';

export function at_togglePermit(){
    return {
        type: TOGGLE_PERMIT,
    }
}

export function at_login(){
    return {
        type: LOGIN,
    }
}

export function at_editNews(id,content){
    return {
        type: EDIT_NEWS,
        id,
        content
    }
}

export function at_toggleLogin(){
    return {
        type: TOGGLE_LOGIN,
    }
}

export function at_getNews(arr){
    return {
        type: GET_NEWS,
        arr
    }
}

export function at_loginCompleted (){
    return {
        type: LOGIN_COMPLETED
    }
}

export function at_logoutCompleted(){
    return {
        type: LOGOUT_COMPLETED
    }
}

export function atx_login(username,password) {
    return (dispatch, getStore) => {
        if (getStore().isPermit){
            dispatch(at_togglePermit());
            let link=`${HOST}`;
            let info ={ username:username, password:password};
            axios.post(link, info)
            .then((res)=> {
                dispatch(at_togglePermit());
                if (res.data.trim() === 'LOGIN_COMPLETED') {
                    localStorage.setItem("username",username);
                    localStorage.setItem("password", password);
                    dispatch(at_loginCompleted());
                }
            })
        }
        
    }
}

export function atx_signup(username,password, password2) {
    return (dispatch, getStore) => {
        if (getStore().isPermit) {
            dispatch(at_togglePermit());
            let link=`${HOST}`;
            let info ={ username:username, password:password, password2:password2};
            axios.post(link, info)
            .then((res)=> {
                dispatch(at_togglePermit());
                if (res.data.trim() === 'SIGNUP_COMPLETED'){
                    alert("Dang ki thanh cong, vui long dang nhap !");
                    dispatch(at_login());
                }
            }).catch(error => {
                dispatch(at_togglePermit());
            });
        }
    }
}

export function at_addnews(username, content) {
    return {
        type: ADD_NEWS,
        username,
        content
    }
}

export function atx_addnews(username,content) {
    return (dispatch, getStore) => {
        if (getStore().isPermit) {
            dispatch(at_togglePermit());
            let link=`${HOST}`;
            let info ={ username:username, content:content};
            axios.post(link, info)
            .then((res)=> {
                dispatch(at_togglePermit());
                dispatch(at_addnews(username, content));
            }).catch(error => {
                dispatch(at_togglePermit());
            });
        }
    }
}

export function atx_getData() {
    return (dispatch, getStore) => {
        if (getStore().isPermit) {
            dispatch(at_togglePermit());
            let link=`${HOST}`;
            axios.get(link)
            .then((res)=> {
                dispatch(at_togglePermit());
                dispatch(at_getNews(res.data));
            })
        }
    }
}

export function at_like(id) {
    return {
        type: LIKE,
        id
    }
}

export function atx_like(idnewslike) {
    return (dispatch, getStore) => {
        if (getStore().isPermit) {
            dispatch(at_togglePermit());
            let link=`${HOST}`;
            let info ={ idnewslike:idnewslike };
            axios.post(link, info)
            .then((res)=> {
                dispatch(at_togglePermit());
                dispatch(at_like(idnewslike));
            })
        }
    }
}

export function at_delete_news(id) {
    return {
        type: DELETE_NEWS,
        id
    }
}

export function atx_delete_news(idnewsdelete) {
    return (dispatch, getStore) => {
        if (getStore().isPermit) {
            dispatch(at_togglePermit());
            let link=`${HOST}`;
            let info ={ idnewsdelete:idnewsdelete };
            axios.post(link, info)
            .then((res)=> {
                dispatch(at_togglePermit());
                dispatch(at_delete_news(idnewsdelete));
            })
        }
    }
}

export function atx_editnews(id,content) {
    return (dispatch, getStore) => {
        if (getStore().isPermit){
            dispatch(at_togglePermit());
            let link=`${HOST}`;
            let info ={ updatenews:content, idnews:id};
            axios.post(link, info)
            .then((res)=> {
                dispatch(at_togglePermit());
                if (res.data.trim() === 'EDITED') {
                    dispatch(at_editNews(id,content));
                }
            })
        }
    }
}