import axios from "axios"
import { useState, useEffect } from "react"

const useFetch = (url) => {
    let [data, setData] = useState([])
    let [loading, setLoading] = useState(true)

    const getInfo = async () => {
        try {
            let res = await axios.get(url)
            let rs = res?.data?.data ? res.data.data : []
            setData(rs)
        }
        catch (e) {
            console.log('Error:', e)
        }
        setLoading(false)
    }

    useEffect(() => {
        getInfo()
    }, [url])// eslint-disable-line react-hooks/exhaustive-deps

    return {
        data, loading
    }
}

export default useFetch