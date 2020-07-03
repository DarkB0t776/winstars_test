import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import userReducer from './user/reducer';
import taskReducer from './task/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  tasks: taskReducer,
});

const middlewares = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
