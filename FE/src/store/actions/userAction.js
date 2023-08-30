import { SET_USER, CLEAR_USER } from "../../constants/actionTypes/userActionType"

export const setUserState = (user) => {
    return {
        type: SET_USER,
        payload: user,
    }
}

export const clearUserState = () => {
    return {
        type: CLEAR_USER,
    }
}