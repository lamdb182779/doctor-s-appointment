import { useEffect, useState } from "react"
import axios from "../services/axios"
import { toast } from "react-toastify"

const usePost = (url, input) => {
    const [isFirst, setIsFirst] = useState(true)
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    const postData = async () => {
        setLoading(true)
        axios.post(url, input)
            .then(res => {
                console.log("Axios post response: ", res)
                setData(res?.data ? res.data : [])
                setMessage(res?.message ? res.message : "")
            }).catch(error => {
                console.log("Axios post error: ", error)
                setData([])
                setMessage(error?.message ? error.message : "")
            })
            .finally(() => setLoading(false))
    }

    const showMessage = () => {
        switch (message) {
            case "server error!":
                return toast.error("Lỗi Server")
            case "wrong username":
                return toast.error("Tài khoản không tồn tại, vui lòng kiểm tra lại")
            case "wrong password":
                return toast.error("Mật khẩu hiện tại không khớp, vui lòng kiểm tra lại")
            case "full slot":
                return toast.error("Đã hết chỗ trống khung giờ này")
            case "wrong captcha":
                return toast.error("Lỗi xác thực captcha, vui lòng xác thực lại")
            case "wrong verify":
                return toast.error("Lỗi xác thực")
            default: break
        }
    }

    useEffect(() => {
        if (isFirst) {
            setIsFirst(false)
        } else if (Object.keys(input).length > 0) {
            postData()
        }
    }, [input])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (isFirst) {
            setIsFirst(false)
        } else if (loading === false) {
            showMessage()
        }
    }, [loading])// eslint-disable-line react-hooks/exhaustive-deps

    return {
        data,
        message,
        loading,
        isFirst
    }
}

export default usePost