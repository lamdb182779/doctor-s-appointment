const initState = {
    route: '',
    preState: {},
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case ('SET_ROUTE'):
            return { ...state, route: action.payload }
        case ('SET_PRESTATE'):
            return { ...state, preState: action.payload }
        default:
            return state
    }
}

export default rootReducer