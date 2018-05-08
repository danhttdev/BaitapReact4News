import {
    initialStateCommon,
    TOGGLE_PERMIT,
    LOGIN_COMPLETED,
    LOGOUT_COMPLETED,
} from "../constants/constants";

export default function reducer(state = initialStateCommon, action) {
    switch (action.type) { 
        case TOGGLE_PERMIT:
            return {
                ...state,
                isPermit: !state.isPermit
            }
        case LOGIN_COMPLETED:
            const arr2 = [...state.path];
            arr2.splice(-1,1);
            arr2.splice(-1,1);
            arr2.push({ 
                path:"/addnews", 
                name: "Add News"
            });
            return {
                ...state,
                path: [...arr2],
            }
        case LOGOUT_COMPLETED:
            let arr = [...state.path];
            arr.splice(-1,1);
            arr.push({
                path:"/login", 
                name: "Login"
            });
            arr.push({
                path:"/signup", 
                name: "Signup"
            });
            return {
                ...state,
                path: [...arr],
            }
        default:
            return state;
    }
}

