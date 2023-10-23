
import { combineReducers } from "redux";
import userReducer from "./userReducer";
import confirmReducer from "./confirmReducer";
import firstReducer from "./firstReducer";

const rootReducer = combineReducers({
    user: userReducer,
    confirm: confirmReducer,
    first: firstReducer,
})

export default rootReducer