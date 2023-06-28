import { Button, Spinner } from "react-bootstrap"
import "../../styles/Specialties/Specialties.scss"
import Specialty from "./Specialty"

import { useNavigate, useLocation } from "react-router-dom"
import { connect } from "react-redux"
import { useEffect, useState } from "react"
import useFetch from "../../custom/fetch"

const Specialties = (props) => {
    let [data, setData] = useState([])
    let [offset, setOffset] = useState(props.route.limit ? props.route.limit : 0)
    let [isMounted, setIsMounted] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()

    if (props.route.path === '/') {
        props.setRoute({ ...props.route, path: location.pathname + location.search, preRoute: { path: '/' } })
    }

    const { data: fetchData, loading } = useFetch(`http://localhost:8080/api/specialties?limit=${props.route.limit ? props.route.limit + 4 : 0}`)
    useEffect(() => {
        setData(fetchData)
    }, [fetchData])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const fetchData = async () => {
            if (isMounted) {
                try {
                    let res = await (await fetch(`http://localhost:8080/api/specialties?offset=${offset}&limit=4`)).json()
                    res = res?.data ? res.data : []
                    setData([...data, ...res])
                } catch (error) {
                    console.log('Error: ', error)
                }
            }
            else {
                setIsMounted(true)
            }
        }
        fetchData()
    }, [offset])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const handleScroll = (e) => {
            const scrollHeight = e.target.documentElement.scrollHeight
            const currentHeight = e.target.documentElement.scrollTop + window.innerHeight
            if (currentHeight + 1 >= scrollHeight) {
                setOffset(offset + 4)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [offset])// eslint-disable-line react-hooks/exhaustive-deps

    const handleSpecialtyDoctors = (id) => {
        let path = `/doctors?specialtyID=${id}`
        props.setRoute({
            preRoute: { ...props.route, limit: offset },
            path: path,
            scrollY: window.scrollY
        })
        navigate(path)
        window.scrollTo(0, 0);
    }

    const handleBack = () => {
        let scrollY = props.route.scrollY
        navigate(props.route.preRoute.path)
        props.setRoute(props.route.preRoute)
        window.scrollTo(0, scrollY)
    }

    return (
        <div className="specialties-container">
            <div className="specialties-title">
                <Button variant="outline-secondary" size="sm" onClick={() => handleBack()}>Quay lại</Button>
                <b>Danh sách các chuyên khoa</b>
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

const mapStateToProps = (state) => {
    return ({
        route: state.route
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        setRoute: (route) => dispatch({ type: 'SET_ROUTE', payload: route }),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Specialties)