import axios from 'axios';
import {
    HOST,
    GET_NEWS,
    LIKE,
    DELETE_NEWS,
    ADD_NEWS,
    EDIT_NEWS
} from '../constants/constants';

import { at_togglePermit } from './actionCommon';

export function at_editNews(id,content){
    return {
        type: EDIT_NEWS,
        payload: {
            id,
            content
        },
    }
}

export function at_getNews(arr){
    return {
        type: GET_NEWS,
        payload: {
            arr
        }
    }
}

export function at_addnews(username, content,id) {
    return {
        type: ADD_NEWS,
        payload: {
            username,
            content,
            id,
            countlike:0
        }
    }
}

export function atx_addnews(username,content) {
    return (dispatch, getStore) => {
        if (getStore().reducerCommon.isPermit) {
            dispatch(at_togglePermit());
            let link=`${HOST}`;
            let info ={ username:username, content:content};
            axios.post(link, info)
            .then((res)=> {
                dispatch(at_togglePermit());
                dispatch(at_addnews(username, content,res.data));
            }).catch(error => {
                dispatch(at_togglePermit());
            });
        }
    }
}

export function atx_getData() {
    return (dispatch, getStore) => {
        if (getStore().reducerCommon.isPermit) { 
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
        payload: {
            id
        }
    }
}

export function atx_like(idnewslike) {
    return (dispatch, getStore) => {
        if (getStore().reducerCommon.isPermit) {
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
        payload: {
            id
        }
    }
}

export function atx_delete_news(idnewsdelete) {
    return (dispatch, getStore) => {
        if (getStore().reducerCommon.isPermit) {
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
        if (getStore().reducerCommon.isPermit){
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