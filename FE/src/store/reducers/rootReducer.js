const initState = {
    route: {
        path: '/'
    },
    user: {},
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case ('SET_ROUTE'):
            return { ...state, route: action.payload }
        case ('SET_USER'):
            return { ...state, user: action.payload }
        default:
            return state
    }
}

export default rootReducer