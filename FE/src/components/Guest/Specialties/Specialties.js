import { Button, Spinner } from "react-bootstrap"
import "../../../styles/Guest/Specialties/Specialties.scss"
import Specialty from "./Specialty"

import { useNavigate } from "react-router-dom"

import { useEffect, useState } from "react"

import useFetch from "../../../custom/fetch"

const Specialties = (props) => {
    const [data, setData] = useState([])
    const [offset, setOffset] = useState(0)
    // const [isMounted, setIsMounted] = useState(false)

    const navigate = useNavigate()

    const { data: newData, loading } = useFetch(`http://localhost:8080/api/specialties?offset=${offset}&limit=4`)

    useEffect(() => {
        if (loading === false) {
            setData([...data, ...newData])
        }
    }, [loading])// eslint-disable-line react-hooks/exhaustive-deps


    const handleScroll = (e) => {
        const scrollHeight = e.target.documentElement.scrollHeight
        const currentHeight = e.target.documentElement.scrollTop + window.innerHeight
        if (currentHeight + 1 >= scrollHeight) {
            setOffset(offset + 4)
            window.removeEventListener("scroll", handleScroll)
        }
    }

    useEffect(() => {
        if (newData.length === 4) {
            window.addEventListener("scroll", handleScroll)
        }
    }, [data])// eslint-disable-line react-hooks/exhaustive-deps

    const handleSpecialtyDoctors = (id) => {
        let path = `/doctors?specialtyID=${id}`
        navigate(path)
        window.scrollTo(0, 0);
    }

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className="specialties-container p-5">
            <div className="specialties-title d-flex justify-content-between">
                <Button variant="outline-secondary" size="sm" onClick={() => handleBack()}>Quay lại</Button>
                <b>Danh sách các chuyên khoa</b>
                <div></div>
            </div>
            <div className="specialties-content">
                {loading === false ?
                    <>
                        {data?.length > 0 ?
                            <>
                                {data.map((item, index) => {
                                    return (
                                        <div key={index} onClick={() => handleSpecialtyDoctors(item.id)}>
                                            <Specialty data={item} />
                                        </div>
                                    )
                                })
                                }
                            </>
                            :
                            <>
                                <div className="specialties-nodata">
                                    Không có dữ liệu
                                </div>
                            </>
                        }
                    </>
                    :
                    <>
                        <div className="specialties-loading">
                            <Spinner animation="border" variant="primary" />
                            Đang tải dữ liệu...
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Specialties