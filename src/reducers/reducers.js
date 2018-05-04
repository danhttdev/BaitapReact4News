import {
    initialState,
    TOGGLE_PERMIT,
    TOGGLE_LOGIN,
    GET_NEWS,
    LOGIN_COMPLETED,
    LOGOUT_COMPLETED,
    LIKE,
    DELETE_NEWS,
    ADD_NEWS,
    LOGIN,
    EDIT_NEWS
} from "../constants/constants";
const uuid = require("uuid");

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
            arr2.splice(-1,1);
            arr2.push({path:"/logout", name: "Logout ("+ localStorage.getItem('username')+" ) "});
            arr2.push({path:"/addnews", name: "Add News"});
            return {
                ...state,
                path: [...arr2],
            }
        case LOGOUT_COMPLETED:
            let arr = [...state.path];
            arr.splice(-1,1);
            arr.splice(-1,1);
            arr.push({path:"/login", name: "Login"});
            return {
                ...state,
                path: [...arr],
            }
        case LIKE:
            return {
                ...state,
                news:[...state.news.map((item) => {
                    const a = {...item};
                    if (item.id === action.id) a.countlike +=1;
                    return a;
                })]
            }
        case DELETE_NEWS:
            return {
                ...state,
                news:[...state.news.filter((item) => {
                    if (item.id !== action.id)
                    return true;
                    return false;
                })]
            }
        case LOGIN:
            return {
                ...state,
                isLogin: true
            }
        case ADD_NEWS:
            let arr3 = [...state.news];
            arr3.unshift({ id: uuid(), username: action.username, content: action.content,countlike:0});
            return {
                ...state,
                news: [...arr3]
            }
        case EDIT_NEWS:
            return {
                ...state,
                news: [...state.news.map((item) => {
                    const a = {...item};
                    if (item.id === action.id) a.content = action.content;
                    return a;
                })]
            }
        default:
            return state;
    }
}

