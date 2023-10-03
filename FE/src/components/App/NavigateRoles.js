import { useEffect, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import useUser from "../../custom/user"
import useGet from "../../custom/get"
import { useSelector } from "react-redux"
import useUtil from "../../custom/utils"

const NavigateRoles = (props) => {
    const { handleNavigate } = useUtil()
    const navigate = useNavigate()
    const location = useLocation()
    const { loadUserStorage } = useUser()
    const user = useSelector(state => state.user)
    const scrollRef = useRef(null)
    const { clearUser } = useUser()
    const { loading, message } = useGet(`/checktoken`)
    useEffect(() => {
        if (loading === false && message !== "") {
            if (message === "no token" && Object.keys(user).length > 0) {
                clearUser()
                navigate("/")
            }
        }
    }, [loading])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const scrollOptions = { behavior: "smooth" }
        scrollRef.current.scrollIntoView(scrollOptions)
    }, [location.pathname])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const handleStorageChange = event => {
            if (event.key === "user") {
                loadUserStorage()
                const user = JSON.parse(event.newValue)
                switch (user?.table) {
                    case "Admins":
                        handleNavigate("/admin")
                        break
                    case "Doctors":
                        handleNavigate("/doctor")
                        break
                    case "Staffs":
                        handleNavigate("/staff")
                        break
                    default:
                        toast.warning("Phiên đăng nhập đã kết thúc, vui lòng đăng nhập lại")
                        handleNavigate("/")
                        break
                }
            }
        }
        window.addEventListener('storage', handleStorageChange)
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    return (<div ref={scrollRef}></div>)
}

export default NavigateRoles