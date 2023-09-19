import { useEffect, useLayoutEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import useUtil from "../../custom/utils"
import { toast } from "react-toastify"
import useUser from "../../custom/user"

const NavigateRoles = (props) => {
    const { handleNavigate } = useUtil()
    const location = useLocation()
    const { loadUserStorage } = useUser()

    const scrollRef = useRef(null)

    useLayoutEffect(() => {
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