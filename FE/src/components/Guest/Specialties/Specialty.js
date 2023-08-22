import { Col, Image, Row } from "react-bootstrap"
import ReactMarkdown from "react-markdown"
import "../../../styles/Guest/Specialties/Specialty.scss"

const Specialty = (props) => {
    return (
        <div className="specialty-container fs-6 bg-secondary text-start p-5 m-4 rounded-5">
            <div className="specialty-title fw-bold">
                {props.data.name}
            </div>
            <Row className="specialty-content h-100 d-flex align-items-center justify-content-between">
                <Col xs={4} className="specialty-image">
                    <Image className="rounded-4" src={props.data.image} alt={props.data.name} fluid />
                </Col>
                <Col className="specialty-description">
                    <ReactMarkdown className="specialty-markdown text-break">{props.data.description}</ReactMarkdown>
                </Col>
            </Row>
        </div>
    )
}

export default Specialty