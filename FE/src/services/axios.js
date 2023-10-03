import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_SERVER_API
})

instance.interceptors.response.use(response => response.data, error => error.response.data)

export default instance