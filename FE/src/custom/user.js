import { useDispatch } from "react-redux";
import { setUserState, clearUserState } from "../store/actions/userAction";

const useUser = () => {
    const dispatch = useDispatch()
    const setUser = user => dispatch(setUserState(user))
    const clearUser = () => dispatch(clearUserState())

    return {
        setUser,
        clearUser,
    }
}

export default useUser