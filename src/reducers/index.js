import { combineReducers } from 'redux'
import HeroesReducer from './reducer_heroes'
import {reducer} from './reducers';

const rootReducer = combineReducers({
  heroes: HeroesReducer
  reducer: reducer

})

export default rootReducer
