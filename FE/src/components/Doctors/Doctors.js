import "../../styles/Doctors/Doctors.scss"
import { Button } from "react-bootstrap"

const Doctors = (props) => {
    return (
        <div className="doctors-container">
            <div className="doctors-title">
                <Button variant="outline-secondary" size="sm" onClick={() => { window.history.back() }}>Quay lại</Button>
                <b>Bác sĩ chuyên khoa </b>
            </div>
            <div className="doctors-content">

            </div>
        </div>
    )
}

export default Doctors