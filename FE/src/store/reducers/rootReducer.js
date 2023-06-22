const initState = {
    route: {
        path: '/'
    }
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case ('SET_ROUTE'):
            return { ...state, route: action.payload }
        default:
            return state
    }
}

export default rootReducer