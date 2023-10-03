import { useSelector } from "react-redux"
import { useEffect } from "react"

import NotFound from "../General/Notfound/Notfound"
import NotPermission from "../General/Notfound/NotPermission"
import useGet from "../../custom/get"
import useUser from "../../custom/user"
import { useLocation } from "react-router-dom"
import { toast } from "react-toastify"

const PrivateRoute = (props) => {
    const user = useSelector(state => state.user)
    const location = useLocation()
    const { clearUser } = useUser()
    const { loading, message } = useGet("http://localhost:8080/api/checktoken")
    useEffect(() => {
        if (loading === false && message !== "") {
            switch (message) {
                case "no token":
                    clearUser()
                    toast.warning("Không thể xác thực người dùng, đăng nhập để tiếp tục")
                    break
                default: break
            }
        }
    }, [loading])// eslint-disable-line react-hooks/exhaustive-deps
    if (loading) {
        return <></>
    }

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
