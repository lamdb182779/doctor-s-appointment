import { useEffect } from "react"
import useFetch from "../../custom/fetch"
import "../../styles/Admin/DoctorList.scss"

const DoctorList = (props) => {
    const { data, loading } = useFetch('http://localhost:8080/api/doctors?pagesize=10')
    return
}

export default DoctorList