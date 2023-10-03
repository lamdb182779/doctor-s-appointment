import { Accordion, Col, Image, Row, Table } from "react-bootstrap"

import welcome from "../../assets/images/welcome.png"

import "../../styles/Admin/Admin.scss"
import useGet from "../../custom/get"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faUserDoctor,
    faUserPen,
    faUserPlus,
    faTableList,
} from "@fortawesome/free-solid-svg-icons"

import { NavLink } from "react-router-dom"
import useUtil from "../../custom/utils"
const Admin = (props) => {
    const { handleLink } = useUtil()
    const { data, loading } = useGet("/self/info")
    return (
        <div className="admin-container px-5 py-5">
            <Row>
                <Col xs={2} className="p-0">
                    <div className="left-nav">
                        <div className="px-2 w-100 m-0">

                        </div>
                    </div>
                </Col>
                <Col xs={9} className="p-0 main-element">
                    <Row>

                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Admin