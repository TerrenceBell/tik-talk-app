//trying to get the messages to be able to render in a component
export const fetchMessages = () => { 
    console.log('in action')
    return(dispatch) => { 
        return fetch('http://localhost:3001/messages')   
        .then(resp => resp.json)
        .then(msg => { 
            dispatch({ type: 'GET_MESSSAGES', payload: msg})
        })
    }
}

export const fetchTopics = () => { 
    return(dispatch) => { 
        return fetch('http://localhost:3001/topics')
        .then(resp => resp.json)
        .then(msg => { 
            dispatch({ type: 'GET_TOPICS', payload: msg})
        })
    }
}