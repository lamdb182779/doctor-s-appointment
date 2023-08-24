import "./../../styles/App/Header.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars,
    faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons'

import { Button, Image, Row, Col } from "react-bootstrap"

import { connect } from "react-redux"

const Header = (props) => {
    return (
        <>
            <div className="w-50 d-flex align-items-center">
                <Row className='App-home d-flex align-items-center h-100 w-100'>
                    <Col xs={1} />
                    <Col xs={1} className='d-flex justify-content-start p-0' onClick={() => props.handleShowCanvas()}>
                        <div className="App-bar p-1 d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faBars} size="lg" />
                        </div>
                    </Col>
                    <Col xs={5} className='App-logo h-50'>
                        <a href='/'><Image className="h-100 w-auto" src={props.logo} alt='logo' fluid /></a>
                    </Col>
                </Row>
            </div>
            <div className="w-50 d-flex justify-content-end align-items-center">
                <Row className="w-100 h-100 justify-content-end align-items-center">
                    <Col xs={3} className="d-flex justify-content-end">
                        {Object.keys(props.user).length === 0 ?
                            <>
                                <div className="App-login h-100 d-flex justify-content-center align-items-center" >
                                    <Button size="" className="w-100" variant="outline-light" onClick={() => props.handleShowLogin()}>
                                        Đăng nhập<br />
                                    </Button>
                                </div>
                            </>
                            :
                            <>
                                <div className="App-user fs-6 text-white h-100 d-flex justify-content-center align-items-center">
                                    Chào mừng,<br />
                                    {props.user.name}
                                </div>
                            </>
                        }
                    </Col>
                    <Col className="d-flex justify-content-start" xs={Object.keys(props.user).length === 0 ? 3 : 1}>
                        {Object.keys(props.user).length === 0 &&
                            <>
                                <div className='App-support d-flex align-items-center text-white fs-6'>
                                    <div className='question-icon me-2'>
                                        <FontAwesomeIcon icon={faCircleQuestion} size='lg' />
                                    </div>
                                    <div className='phone-number'>
                                        Hỗ trợ <br />
                                        033xxxxx33
                                    </div>
                                </div>
                            </>
                        }
                    </Col>
                </Row>
            </div >
        </>
    )
}

const mapStateToProps = (state) => {
    return ({
        user: state.user
    })
}

export default connect(mapStateToProps)(Header)