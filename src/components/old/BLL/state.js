import { createStore, combineReducers } from 'redux';
import SiteLogicReducer from './MainReducer.js';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk'


let reducers = combineReducers({
    SiteLogicReducer
})
let store = createStore(reducers, applyMiddleware(thunk))

export default store