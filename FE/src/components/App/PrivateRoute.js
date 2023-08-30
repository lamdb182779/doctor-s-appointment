import { useSelector } from "react-redux"
// import { setUserState, clearUserState } from "../../store/actions/userAction"
// import { showToastState } from "../../store/actions/toastAction"

import NotFound from "../General/Notfound/Notfound"
import NotPermission from "../General/Notfound/NotPermission"

const PrivateRoute = (props) => {
    const user = useSelector(state => state.user)
    if (props.element) {
        if (props.table?.length > 0) {
            if (user?.table) {
                if (props.table.includes(user.table)) {
                    return props.element
                }
                return <NotPermission />
            }
            return <NotPermission />
        }
        return props.element
    }
    return <NotFound />
}

export default PrivateRoute
