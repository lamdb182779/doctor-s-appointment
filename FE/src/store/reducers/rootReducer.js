

const initState = {
    user: {},
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case ('SET_USER'):
            return { ...state, user: action.payload }
        default:
            return state
    }
}

export default rootReducer