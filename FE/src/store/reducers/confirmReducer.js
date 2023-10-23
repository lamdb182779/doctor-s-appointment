import {
    SET_CONFIG_CONFIRM
} from "../../constants/actionTypes/confirmActionType"

const nothing = () => { }

const initialState = {
    show: false,
    centered: false,
    variant: "warning",
    size: "lg",
    title: "Cảnh báo",
    body: "Bạn có chắc thực hiện hành động này?",
    fs: "6",
    align: "",
    accept: nothing,
    refuse: nothing,
}
const confirmReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONFIG_CONFIRM:
            return Object.keys(state).reduce((result, key) => {
                if (key in action.payload) {
                    result[key] = action.payload[key]
                } else {
                    result[key] = state[key]
                }
                return result
            }, {})
        default:
            return state
    }
}

export default confirmReducer