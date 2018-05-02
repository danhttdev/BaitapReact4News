import axios from 'axios';
import {
    TOGGLE_PERMIT,
    TOGGLE_LOGIN,
    HOST,
    GET_NEWS
} from '../constants/constants';

export function at_togglePermit(){
    return {
        type: TOGGLE_PERMIT,
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
export function atx_login(username,password) {
    return (dispatch, getStore) => {
        console.log(getStore().isPermit);
        if (getStore().isPermit){
            dispatch(at_togglePermit);
            let link=`${HOST}`;
            let info ={ username:username, password:password};
            axios.post(link, info)
            .then((res)=> {
                dispatch(at_togglePermit);
                alert(res.data);
                
            })
        }
        
    }
}
export function atx_signup(username,password, password2) {
    return (dispatch, getStore) => {
        if (getStore().isPermit) {
            dispatch(at_togglePermit);
            let link=`${HOST}`;
            let info ={ username:username, password:password, password2:password2};
            axios.post(link, info)
            .then((res)=> {
                dispatch(at_togglePermit);
                alert(res.data);
            })
        }
    }
}
export function atx_getData() {
    return (dispatch, getStore) => {
        if (getStore().isPermit) {
            dispatch(at_togglePermit);
            let link=`${HOST}`;
            axios.get(link)
            .then((res)=> {
                dispatch(at_togglePermit);
                dispatch(at_getNews(res.data));
            })
        }
    }
}
