import {
    initialStateAccount,
    TOGGLE_LOGIN,
    LOGOUT_COMPLETED,
    LOGIN_COMPLETED
} from "../constants/constants";

export default function reducerAccount(state = initialStateAccount, action) {
    switch (action.type) { 
        case TOGGLE_LOGIN:
            return {
                ...state,
                isLogin: !state.isLogin
            }
        case LOGOUT_COMPLETED:
            return {
                ...state,
                isLogin:false,
                userlogin: {
                    username: "",
                    password: ""
                }
            }
        case LOGIN_COMPLETED:
            return {
                ...state,
                isLogin:true,
                userlogin: {
                    username: action.payload.username,
                    password: action.payload.password
                }
            }
        default:
            return state; 
    }
}

