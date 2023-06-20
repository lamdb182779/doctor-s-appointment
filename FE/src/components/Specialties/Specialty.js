import { Image } from "react-bootstrap"
import "../../styles/Specialties/Specialty.scss"

const Specialty = (props) => {
    return (
        <div className="specialty-container">
            <div className="specialty-title">
                {props.data.name}
            </div>
            <div className="specialty-content">
                <div className="specialty-image">
                    <Image src={props.data.image} alt={props.data.name} fluid />
                </div>
                <div className="specialty-description">

                </div>
            </div>
        </div>
    )
}

export default Specialty