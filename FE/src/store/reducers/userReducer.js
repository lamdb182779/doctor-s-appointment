import {
    SET_USER,
    CLEAR_USER,
    LOAD_USER_FROM_STORAGE
} from "../../constants/actionTypes/userActionType";

const storage = localStorage.getItem("user")
const initialState = storage === undefined ? {} : JSON.parse(storage)

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            localStorage.setItem("user", JSON.stringify(action.payload))
            return action.payload
        case CLEAR_USER:
            if (localStorage.getItem("user")) {
                localStorage.removeItem("user")
            }
            return {}
        case LOAD_USER_FROM_STORAGE:
            if (localStorage.getItem("user")) {
                return JSON.parse(localStorage.getItem("user"))
            }
            return {}
        default:
            return state
    }
}

export default userReducer