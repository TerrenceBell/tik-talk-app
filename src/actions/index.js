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

export const createMessage = content => {

    console.log(content)
    return dispatch => {
        //debugger
        return fetch('http://localhost:3001/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: { content } })


            })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.error) {
                    //debugger
                    console.log(resp)
                    alert(resp.error)
                } else {
                    //debugger
                    dispatch(sendMessage(resp))
                }
            })
            .catch(console.log)
    }
}

//on submit call comp again to render
// export const fetchTopics = () => dispatch => { 
//         return fetch('http://localhost:3001/topics')
//         .then(resp => resp.json)
//         .then(resp => { 
//             dispatch(setTopics(resp))
//             console.log(resp)

//         })

// }