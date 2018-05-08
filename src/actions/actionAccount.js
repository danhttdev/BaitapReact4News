import axios from 'axios';
import {
    TOGGLE_LOGIN,
    HOST,
    LOGIN_COMPLETED,
    LOGOUT_COMPLETED,
    LOGIN_UNCOMPLETED,
    SIGNUP_COMPLETED,
    SIGNUP_UNCOMPLETED,
    MSG1,
    MSG2,
} from '../constants/constants';
import {    atx_getData } from './actionNews';
import {    at_togglePermit } from './actionCommon';

export function at_toggleLogin(){
    return {
        type: TOGGLE_LOGIN,
    }
}

export function at_loginCompleted (username, password){
    return dispatch => {
        dispatch({
            type: LOGIN_COMPLETED,
            payload : {
                username,
                password
            }
        });
    }
}

export function at_logoutCompleted(){
    return {
        type: LOGOUT_COMPLETED
    }
}

export function atx_login(username, password, cb_success) {
    return (dispatch, getStore) => {
        if (getStore().reducerCommon.isPermit){
            dispatch(at_togglePermit());
            let link=`${HOST}`;
            let info ={ username:username, password:password};
            axios.post(link, info)
            .then((res)=> {
                dispatch(at_togglePermit());
                if (res.data.trim() === LOGIN_COMPLETED) {
                    dispatch(at_loginCompleted(username,password));
                    dispatch(atx_getData());
                    cb_success();
                }
                else {
                    alert(LOGIN_UNCOMPLETED);
                }
            }).catch(error => {
                dispatch(at_togglePermit());
            });
        }
    }
}

export function atx_signup(username,password,password2, success) {
    return (dispatch, getStore) => {
        if (getStore().reducerCommon.isPermit) {
            dispatch(at_togglePermit());
            let link=`${HOST}`;
            let info ={ username:username, password:password, password2:password2};
            axios.post(link, info)
            .then((res)=> {
                dispatch(at_togglePermit());
                if (res.data.trim() === SIGNUP_COMPLETED){
                    alert(MSG1);
                    success();
                }
                if (res.data.trim() === SIGNUP_UNCOMPLETED){
                    alert(MSG2);
                }
            }).catch(error => {
                dispatch(at_togglePermit());
            });
        }
    }
}
