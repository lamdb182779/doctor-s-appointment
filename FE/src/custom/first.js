import { useDispatch } from "react-redux"
import { firstCheckToken } from "../store/actions/firstAction"

const useFirst = () => {
    const dispatch = useDispatch()
    const firstCheck = () => dispatch(firstCheckToken())

    return {
        firstCheck,
    }
}

export default useFirst