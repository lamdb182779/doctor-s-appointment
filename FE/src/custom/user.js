import { useDispatch } from "react-redux";
import {
    setUserState,
    clearUserState,
    loadUserFromStorage
} from "../store/actions/userAction";

const useUser = () => {
    const dispatch = useDispatch()
    const setUser = user => dispatch(setUserState(user))
    const clearUser = () => dispatch(clearUserState())
    const loadUserStorage = () => dispatch(loadUserFromStorage())

    return {
        setUser,
        clearUser,
        loadUserStorage,
    }
}

export default useUser