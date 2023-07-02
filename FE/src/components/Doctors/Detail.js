import "../../styles/Doctors/Detail.scss"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { connect } from "react-redux"

const Detail = (props) => {
    const navigate = useNavigate()

    const handleBack = () => {
        let scrollY = props.route.scrollY
        navigate(props.route.preRoute.path)
        props.setRoute(props.route.preRoute)
        setTimeout(() => {
            window.scrollTo(0, scrollY)
        }, 250)
    }
    return (
        <div className="detail-container">
            <div className="detail-title">
                <Button variant="outline-secondary" size="sm" onClick={() => handleBack()}>Quay lại</Button>
                <b>Danh sách các bác sĩ </b>
            </div>
            <div className="detail-content">

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

export default connect(mapStateToProps, mapDispatchToProps)(Detail)