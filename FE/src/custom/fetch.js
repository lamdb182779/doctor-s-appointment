import { useState, useEffect } from "react"

const useFetch = (url, options) => {
    let [data, setData] = useState([])
    let [loading, setLoading] = useState(false)
    let [message, setMessage] = useState('')

    const getInfo = async () => {
        if (url !== '') {
            setLoading(true)
            try {
                let res = await (await fetch(url, { ...options, credentials: 'include' })).json()
                console.log(res)
                setData(res?.data ? res.data : [])
                setMessage(res?.message ? res.message : '')
            }
            catch (e) {
                console.log('Error:', e)
            }
            setLoading(false)
        }
    }

    useEffect(() => {
        getInfo()
    }, [url])// eslint-disable-line react-hooks/exhaustive-deps

    return {
        data,
        message,
        loading,
    }
}

export default useFetch