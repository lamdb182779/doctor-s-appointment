import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const GuestRoute = (props) => {
    const user = useSelector(state => state.user)
    switch (user?.table) {
        case "Admins":
            return <Navigate to="/admin" />
        case "Doctors":
            return <Navigate to="/doctor" />
        case "Staffs":
            return <Navigate to="/staff" />
        default: break
    }
    return props.element
}

export default GuestRoute