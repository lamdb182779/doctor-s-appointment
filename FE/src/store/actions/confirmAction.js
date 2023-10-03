import {
    SET_CONFIG_CONFIRM
} from "../../constants/actionTypes/confirmActionType"

export const setConfig = (config) => {
    return {
        type: SET_CONFIG_CONFIRM,
        payload: config,
    }
}
