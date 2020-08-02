export default function MessageReducer(state={ 
    general:  [ 
        {from: 'user1', msg: 'test'},
        {from: 'user2', msg: 'testing'},
        {from: 'user1', msg: 'Hope this works!'}
    ],
    topic2:  [ 
        {from: 'user1', msg: 'new message'},
        {from: 'user2', msg: 'hey there'},
        {from: 'user1', msg: 'will this work?'}
    ],

}, action){ 
    const
    switch(action.type) { 
        case 'RECIEVE MESSAGE' : 
            return { 
                
                ...state, //bring forward entire state
                //need to overrride a single key and define as object
                [action.payload.topic]: [ 
                    ...state[action.payload.topic],
                    { 
                        from: action.payload.from,
                        msg: action.payload.msg 
                    }
                ]    
                
            }
        default: 
        return state    
    }
}


