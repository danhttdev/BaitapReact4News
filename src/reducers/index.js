import {combineReducers} from 'redux';
import reducerAccount from './reducerAccount';
import reducerNews from './reducerNews';
import reducerCommon from './reducerCommon';

export default combineReducers({
    reducerAccount,
    reducerNews,
    reducerCommon
});