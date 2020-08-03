//trying to get the messages to be able to render in a component
export const fetchMessages = () => dispatch => { 
    console.log('in action')
        return fetch('http://localhost:3001/messages')   
        .then(resp => resp.json)
        .then(msg => { 
            dispatch({ type: 'GET_MESSSAGES', payload: msg})
        })
    
}

export const fetchTopics = () => dispatch => { 
        return fetch('http://localhost:3001/topics')
        .then(resp => resp.json)
        .then(msg => { 
            dispatch({ type: 'GET_TOPICS', payload: msg})
        })
    
}