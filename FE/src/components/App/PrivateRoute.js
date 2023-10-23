import { useSelector } from "react-redux"
import { useEffect } from "react"

import NotFound from "../General/Notfound/Notfound"
import NotPermission from "../General/Notfound/NotPermission"
import useGet from "../../custom/get"
import useUser from "../../custom/user"
import { toast } from "react-toastify"
import useUtil from "../../custom/utils"

const PrivateRoute = (props) => {
    const user = useSelector(state => state.user)
    const { handleNavigate } = useUtil()
    const { clearUser } = useUser()
    const { loading, message } = useGet("/checktoken")
    useEffect(() => {
        if (loading === false) {
            switch (message) {
                case "no token":
                    clearUser()
                    handleNavigate("/")
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
