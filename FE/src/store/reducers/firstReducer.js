import {
    SET_FIRST_CHECK_TOKEN
} from "../../constants/actionTypes/firstActionType"

const initialState = {
    firstCheckToken: false
}

const firstReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FIRST_CHECK_TOKEN:
            return { ...state, firstCheckToken: true }
        default: return state
    }
}

export default firstReducer