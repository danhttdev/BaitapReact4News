
import {
    initialState,
    TOGGLE_PERMIT,
    TOGGLE_LOGIN,
    GET_NEWS,
    LOGIN_COMPLETED,
    LOGOUT_COMPLETED
} from "../constants/constants";

export function reducer(state = initialState, action) {
    switch (action.type) { 
        case TOGGLE_PERMIT:
            return {
                ...state,
                isPermit: !state.isPermit
            }
        case TOGGLE_LOGIN:
            return {
                ...state,
                isLogin: !state.isLogin
            }
        case GET_NEWS:
            return {
                ...state,
                news: [...action.arr],
            }
        case LOGIN_COMPLETED:
            const arr2 = [...state.path];
            arr2.push({path:"/logout", name: "Log Out"})
            return {
                ...state,
                path: [...arr2],
            }
        case LOGOUT_COMPLETED:
            let arr = [...state.path];
            arr.splice(-1,1);
            return {
                ...state,
                path: [...arr],
            }
        default:
            return state;
    }
}

