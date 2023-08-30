import { Button, Modal } from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faTriangleExclamation
} from "@fortawesome/free-solid-svg-icons"

import "../../../styles/General/Dialog/Warning.scss"

// import { useState } from "react"

const Warning = (props) => {
    const handleClose = () => {
        props.setShow && props.setShow(false)
    }
    const handleYes = () => {
        props.handleYes && props.handleYes()
    }
    const handleNo = () => {
        props.handleNo && props.handleNo()
    }
    return (
        <Modal className="warning" show={props.show || false} size={props.size || ""}>
            <Modal.Header className="border-warning border-2" >
                <Modal.Title className="text-warning h5">
                    <FontAwesomeIcon icon={faTriangleExclamation} />
                    &nbsp;{props.title || "Cảnh báo"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className={`${props.bodyFs || ""} ${props.bodyAlign || ""}`}>
                {props.body || "Bạn có chắc thực hiện hành động này?"}
            </Modal.Body>
            <Modal.Footer className="border-0">
                <Button variant="outline-secondary" size="sm" onClick={() => { handleNo(); handleClose() }}>Không</Button>
                <Button variant="primary" size="sm" onClick={() => { handleYes(); handleClose() }}>Đồng ý</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Warning