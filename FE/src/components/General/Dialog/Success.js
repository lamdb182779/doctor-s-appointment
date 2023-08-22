import { Modal, ProgressBar } from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCircleCheck,
} from "@fortawesome/free-solid-svg-icons"

import "../../../styles/General/Dialog/Success.scss"

import { useState, useEffect } from "react"

const Success = (props) => {
    const [progress, setProgress] = useState(100)
    useEffect(() => {
        if (props.show) {
            setProgress(100)
            const interval = setInterval(() => {
                setProgress((prevProgress) =>
                    prevProgress <= 0 ? 0 : prevProgress - 1
                )
            }, props.time / 100 || 50)
            setTimeout(() => {
                clearInterval(interval)
            }, props.time || 5000)
            const timer = setTimeout(() => {
                props.setShow && props.setShow(false)
            }, props.time || 5000)
            return () => clearTimeout(timer)
        }
    }, [props.show || null])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <Modal className="success" show={props.show || false} onHide={props.handleClose} size={props.size || "sm"}>
            <Modal.Header className="py-2 border-success border-0" >
                <Modal.Title className="text-success h5">
                    <FontAwesomeIcon icon={faCircleCheck} />
                    &nbsp;{props.title || 'Thành công'}
                </Modal.Title>
            </Modal.Header>
            <ProgressBar variant="success" now={progress} />
            <Modal.Body className={`${props.bodyFs || ""} ${props.bodyAlign || ""}`}>
                {props.body || 'Nhiệm vụ hoàn thành!'}
            </Modal.Body>
        </Modal>
    )
}

export default Success