import { combineReducers } from 'redux';
import  messageReducer  from './messageReducer';
import topicsReducer from './topicsReducer';

export default combineReducers({ 
    message: messageReducer,
    topic: topicsReducer
})