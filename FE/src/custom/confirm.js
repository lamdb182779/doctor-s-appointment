import { Button, Modal, Row, Col } from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faTriangleExclamation
} from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import {
    setConfig
} from "../store/actions/confirmAction";

const useConfirm = () => {
    const confirm = useSelector(state => state.confirm)
    const dispatch = useDispatch()
    const showConfirm = (config) => {
        dispatch(setConfig({ show: true }))
        delete config.show
        if (Object.keys(config).length > 0) {
            dispatch(setConfig(config))
        }
    }
    const closeConfirm = () => dispatch(setConfig({ show: false }))
    const handleConfirmYes = () => {
        confirm.accept()
        closeConfirm()
    }
    const handleConfirmNo = () => {
        confirm.refuse()
        closeConfirm()
    }
    const ConfirmDialog = () => {
        return (
            <Modal className="confirm" show={confirm.show} size={confirm.size} scrollable={true} centered={confirm.centered}>
                <div className="h-100 w-100 rounded-3 m-1 p-3">
                    <Row className="py-3 m-0">
                        <Col xs={2} className={`text-${confirm.variant} fs-1 d-flex justify-content-center align-items-center`}>
                            <FontAwesomeIcon size={["xl", "lg", "", "sm"].includes(confirm.size) ? confirm.size : "1x"} icon={faTriangleExclamation} />
                        </Col>
                        <Col className="d-flex align-items-center">
                            <div>
                                <Row className={`m-0 text-${confirm.variant} text-${confirm.align}`}>
                                    <h5 className="m-0 p-0">
                                        {confirm.title}
                                    </h5>
                                </Row>
                                <Row className={`m-0 ${["xl", "lg"].includes(confirm.size) ? "mt-2" : ""} text-${confirm.align} fs-${confirm.fs}`}>
                                    {confirm.body}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <hr className={`text-${confirm.variant} ${["xl", "lg"].includes(confirm.size) ? "mt-2"
                        : confirm.size === "sm" ? "d-none" : "mt-0"}`} />
                    <div className="d-flex gap-2 justify-content-end mt-2 mx-4">
                        <Button variant="outline-secondary" size={["xl", "lg"].includes(confirm.size) ? "" : "sm"}
                            onClick={() => handleConfirmNo()}>Không</Button>
                        <Button variant="primary" size={["xl", "lg"].includes(confirm.size) ? "" : "sm"}
                            onClick={() => handleConfirmYes()}>Đồng ý</Button>
                    </div>
                </div>
            </Modal>
        )
    }
    return {
        showConfirm,
        ConfirmDialog
    }
}

export default useConfirm