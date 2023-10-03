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
            <Modal className="confirm" show={confirm.show} size={confirm.size}>
                <div className="h-100 w-100 rounded-3 m-1 p-3">
                    <Row className="py-3 m-0">
                        <Col xs={2} className="text-warning fs-1 d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon size={confirm.size || "lg"} icon={faTriangleExclamation} />
                        </Col>
                        <Col className="">
                            <Row className={`m-0 text-warning text-${confirm.align}`}>
                                <h5 className="m-0 p-0">
                                    {confirm.title}
                                </h5>
                            </Row>
                            <Row className={`m-0 text-${confirm.align} fs-${confirm.fs}`}>
                                {confirm.body}
                            </Row>
                        </Col>
                    </Row>
                    <div className="d-flex gap-2 justify-content-end mt-2 mx-4">
                        <Button variant="outline-secondary" size="sm" onClick={() => handleConfirmNo()}>Không</Button>
                        <Button variant="primary" size="sm" onClick={() => handleConfirmYes()}>Đồng ý</Button>
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