import {
    initialStateNews,
    GET_NEWS,
    LIKE,
    DELETE_NEWS,
    ADD_NEWS,
    EDIT_NEWS
} from "../constants/constants";

export default function reducer(state = initialStateNews, action) {
    switch (action.type) { 
        case GET_NEWS:
            return {
                ...state,
                news: [...action.payload.arr],
            }
        case LIKE:
            return {
                ...state,
                news:[...state.news.map((item) => {
                    const a = {...item};
                    if (item.id === action.payload.id) a.countlike +=1;
                    return a;
                })]
            }
        case DELETE_NEWS:
            return {
                ...state,
                news:[...state.news.filter((item) => {
                    if (item.id !== action.payload.id)
                    return true;
                    return false;
                })]
            }
        case ADD_NEWS:
            let arr3 = [...state.news];
            arr3.push({ 
                id: action.payload.id, 
                username: action.payload.username, 
                content: action.payload.content,
                countlike: 0
            });
            return {
                ...state,
                news: [...arr3]
            }
        case EDIT_NEWS:
            return {
                ...state,
                news: [...state.news.map((item) => {
                    const a = {...item};
                    if (item.id === action.payload.id) a.content = action.payload.content;
                    return a;
                })]
            }
        default:
            return state;
    }
}

