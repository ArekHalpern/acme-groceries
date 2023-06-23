import {createStore, combineReducers, applyMiddleware} from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { views, groceries } from './reducers';

const reducer = combineReducers({
    views,
    groceries
});

export default createStore(reducer, applyMiddleware(loggerMiddleware, thunkMiddleware));