//trying to get the messages to be able to render in a component
//used as template for other request
export const setMessages = (messages) => {
    //console.log('confusing', messages)
    return {
        type: 'SET_MESSAGES',
        messages

    }
}

export const setTopics = (topics) => {
    return {
        type: 'SET_TOPICS',
        topics
    }
}

export const sendMessage = (messages) => {
    //console.log('confusing', messages)
    return {
        type: 'SEND_MESSAGE',
        messages

    }
}




export const getMessages = () => {
    return dispatch => {
        return fetch('http://localhost:3001/messages', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }


            })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.error) {
                    alert(resp.error)
                } else {
                    dispatch(setMessages(resp))
                        //console.log(resp)
                }
            })
            .catch(console.log)
    }
}

export const getTopics = () => {
    return dispatch => {
        return fetch('http://localhost:3001/topics', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }


            })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.error) {
                    alert(resp.error)
                } else {
                    dispatch(setTopics(resp))
                        //console.log(resp)
                }
            })
            .catch(console.log)
    }
}

export const sendMessages = () => {
    return dispatch => {
        return fetch('http://localhost:3001/messages', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                }


            })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.error) {
                    alert(resp.error)
                } else {
                    dispatch(sendMessage(resp))
                        //console.log(resp)
                }
            })
            .catch(console.log)
    }
}


// export const fetchTopics = () => dispatch => { 
//         return fetch('http://localhost:3001/topics')
//         .then(resp => resp.json)
//         .then(resp => { 
//             dispatch(setTopics(resp))
//             console.log(resp)

//         })

// }