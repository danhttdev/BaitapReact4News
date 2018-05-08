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
                    return {
                        ...item,
                        countlike: item.id === action.payload.id ? (item.countlike+1) : item.countlike
                    }
                })]
            }
        case DELETE_NEWS:
            return {
                ...state,
                news:[...state.news.filter(item => (item.id !== action.payload.id))]
            }
        case ADD_NEWS:
            return {
                ...state,
                news: [...state.news, action.payload]
            }
        case EDIT_NEWS:
            return {
                ...state,
                news: [...state.news.map((item) => {
                    return {
                        ...item,
                        content: item.id === action.payload.id ? action.payload.content : item.content
                    }
                })]
            }
        default:
            return state;
    }
}

