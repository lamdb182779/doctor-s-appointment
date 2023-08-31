import {
    SET_USER,
    CLEAR_USER,
    LOAD_USER_FROM_STORAGE
} from "../../constants/actionTypes/userActionType"

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

export const loadUserFromStorage = () => {
    return {
        type: LOAD_USER_FROM_STORAGE,
    }
}
