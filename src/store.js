import { createStore, compose, applyMiddleware, combineReducers } from 'redux'; 
import thunk from 'redux-thunk'; 
import messages from './reducers/messageReducer';
import topics from './reducers/topicsReducer';

const reducer = combineReducers({ 
messages,topics
//use commas to seperate reducers
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//aplying middleware from thunk

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk))); 

export default store;

//create store using reducer const 
