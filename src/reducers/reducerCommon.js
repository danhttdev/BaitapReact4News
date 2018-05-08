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
            arr2.splice(-2,2,{ 
                path:"/addnews", 
                name: "Add News"
            });
            return {
                ...state,
                path: [...arr2],
            }
        case LOGOUT_COMPLETED:
            let arr = [...state.path];
            arr.splice(-1,1,{
                path:"/login", 
                name: "Login"
            },{
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

