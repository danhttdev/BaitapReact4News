import {
    initialStateAccount,
    TOGGLE_LOGIN,
} from "../constants/constants";

export default function reducerAccount(state = initialStateAccount, action) {
    switch (action.type) { 
        case TOGGLE_LOGIN:
            return {
                ...state,
                isLogin: !state.isLogin
            }
        default:
            return state; 
    }
}

