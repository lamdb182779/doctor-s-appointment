import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
// import { setUserState, clearUserState } from "../../store/actions/userAction"
// import { showToastState } from "../../store/actions/toastAction"

import NotFound from "../General/Notfound/Notfound"
import NotPermission from "../General/Notfound/NotPermission"
import useFetch from "../../custom/fetch"
import useUser from "../../custom/user"
import { useNavigate, useLocation } from "react-router-dom"
import { toast } from "react-toastify"

const PrivateRoute = (props) => {
    const navigate = useNavigate()
    const user = useSelector(state => state.user)
    const location = useLocation()
    const { clearUser } = useUser()
    const { loading, message } = useFetch(`http://localhost:8080/api/checktoken?${location.pathname.slice(1)}`)
    useEffect(() => {
        if (loading === false && message !== "") {
            switch (message) {
                case "no token":
                    clearUser()
                    toast.warning("Không thể xác thực, tài nguyên cần đăng nhập để tiếp tục truy cập")
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
