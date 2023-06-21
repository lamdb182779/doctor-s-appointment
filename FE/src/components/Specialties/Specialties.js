import { Button, Spinner } from "react-bootstrap"
import "../../styles/Specialties/Specialties.scss"
import Specialty from "./Specialty"
import useFetch from "../../custom/fetch"

import { useNavigate, useLocation } from "react-router-dom"

const Specialties = (props) => {
    const { data, loading } = useFetch('http://localhost:8080/api/specialties')

    const navigate = useNavigate()
    const location = useLocation()

    const handleSpecialtyDoctors = (id) => {
        let route = `/doctors?specialtyID=${id}`
        navigate(route, {
            state: {
                route: props.route,
                preState: location.state,
                loc: window.pageYOffset,
            }
        })
        props.setRoute(route)
        window.scrollTo(0, 0);
    }

    const handleBack = () => {
        navigate(location.state.route, { state: location.state.preState })
        props.setRoute(location.state.route)
        setTimeout(() => {
            window.scrollTo(0, location.state.loc)
        }, 30)
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

export default Specialties