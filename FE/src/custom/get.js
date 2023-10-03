import axios from "../services/axios"
import { useState, useEffect } from "react"

const useGet = (url) => {
    let [data, setData] = useState([])
    let [loading, setLoading] = useState(false)
    let [message, setMessage] = useState("")

    const getInfo = async () => {
        setLoading(true)
        axios.get(url)
            .then(res => {
                console.log(res)
                setData(res?.data ? res.data : [])
                setMessage(res?.message ? res.message : "")
            }).catch(error => console.log("Axios get error: ", error))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        if (url) {
            getInfo()
        }
    }, [url])// eslint-disable-line react-hooks/exhaustive-deps

    return {
        data,
        message,
        loading,
    }
}

export default useGet