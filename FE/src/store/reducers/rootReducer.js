
import { combineReducers } from "redux";
import userReducer from "./userReducer";
import confirmReducer from "./confirmReducer";

const rootReducer = combineReducers({
    user: userReducer,
    confirm: confirmReducer,
})

export default rootReducer