export default (state = [], action) => {
    switch (action.type) {
        case 'SET_MESSAGES':
            return action.messages

        case 'SEND_MESSAGE':
            return action.messages


        default:
            return state
    }

}