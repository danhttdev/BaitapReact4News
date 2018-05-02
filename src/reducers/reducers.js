
import {
    initialState,
    TOGGLE_PERMIT,
    TOGGLE_LOGIN,
    GET_NEWS
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
        default:
            return state;
    }
}

