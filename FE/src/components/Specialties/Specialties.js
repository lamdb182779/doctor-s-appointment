import { Button, Spinner } from "react-bootstrap"
import "../../styles/Specialties/Specialties.scss"
import Specialty from "./Specialty"
import useFetch from "../../custom/fetch"

import { useNavigate } from "react-router-dom"
import { connect } from "react-redux"

const Specialties = (props) => {
    const { data, loading } = useFetch('http://localhost:8080/api/specialties')

    const navigate = useNavigate()

    const handleSpecialtyDoctors = (id) => {
        let path = `/doctors?specialtyID=${id}`
        props.setRoute({
            preRoute: props.route,
            path: path,
            scrollY: window.scrollY
        })
        navigate(path)
        window.scrollTo(0, 0);
    }

    const handleBack = () => {
        if (props.route.preRoute) {
            let scrollY = props.route.scrollY
            navigate(props.route.preRoute.path)
            props.setRoute(props.route.preRoute)
            setTimeout(() => {
                window.scrollTo(0, scrollY)
            }, 30)
        } else {
            navigate('/')
            window.scrollTo(0, 0)
        }
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