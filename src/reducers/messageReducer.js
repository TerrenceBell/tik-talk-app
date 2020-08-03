import { fetchMessages, fetchTopics } from '../actions/index'; 

export default function messageReducer(state=[], action){ 
    switch(action.type) { 
        
        case 'GET_MESSAGES' : 
        console.log('in reducer')
            return [
                //bring forward entire state
                ...state, action.payload
                
                // //need to overrride a single key and define as object
                // [action.payload.topic]: [ 
                //     ...state[action.payload.topic],
                //     { 
                //         from: action.payload.from,
                //         msg: action.payload.msg 
                //     }
                // ]    
                
            ]
            case 'GET_TOPICS' : 
            return [...state, action.payload]
        default: 
        return state    
    }
    
}


//practice-- general:  [ 
    //     {from: 'user1', msg: 'test'},
    //     {from: 'user2', msg: 'testing'},
    //     {from: 'user1', msg: 'Hope this works!'}
    // ],
    // topic2:  [ 
    //     {from: 'user1', msg: 'new message'},
    //     {from: 'user2', msg: 'hey there'},
    //     {from: 'user1', msg: 'will this work?'}
    // ],