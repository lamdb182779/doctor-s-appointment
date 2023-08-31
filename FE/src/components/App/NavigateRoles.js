import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import useUser from "../../custom/user"

const NavigateRoles = (props) => {
    const navigate = useNavigate()
    const { loadUserStorage } = useUser()

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === "user") {
                loadUserStorage()
                const user = JSON.parse(event.newValue)
                switch (user?.table) {
                    case "Admins":
                        navigate("/admin")
                        break
                    case "Doctors":
                        navigate("/doctor")
                        break
                    case "Staffs":
                        navigate("/staff")
                        break
                    default:
                        toast.warning("Phiên đăng nhập đã kết thúc, vui lòng đăng nhập lại")
                        navigate("/")
                        break
                }
            }
        }
        window.addEventListener('storage', handleStorageChange)
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    return (<></>)
}

export default NavigateRoles