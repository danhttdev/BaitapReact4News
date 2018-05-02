import { combineReducers } from 'redux'
import {reducer} from './reducers';
import { sessionReducer } from 'redux-react-session';

const rootReducer = combineReducers({
  reducer: reducer,
  session: sessionReducer

})

export default rootReducer;
