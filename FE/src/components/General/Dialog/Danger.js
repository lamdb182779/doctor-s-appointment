import { Modal, ProgressBar } from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons"

import "../../../styles/General/Dialog/Danger.scss"

import { useState, useEffect } from "react"

const Danger = (props) => {
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
        <Modal className="danger" show={props.show || false} size={props.size || "sm"}>
            <Modal.Header className="py-2 border-danger border-0" >
                <Modal.Title className="text-danger h5">
                    <FontAwesomeIcon icon={faCircleExclamation} />
                    &nbsp;{props.title || 'Thất bại'}
                </Modal.Title>
            </Modal.Header>
            <ProgressBar variant="danger" now={progress} />
            <Modal.Body className={`${props.bodyFs} ${props.bodyAlign}`}>
                {props.body || 'Đã xảy ra lỗi!'}
            </Modal.Body>
        </Modal>
    )
}

export default Danger