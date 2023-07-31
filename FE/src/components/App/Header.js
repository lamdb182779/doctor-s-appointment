import "./../../styles/App/Header.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars,
    faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons'

import { Button, Image } from "react-bootstrap"

import { connect } from "react-redux"

const Header = (props) => {
    return (
        <>
            <div className='App-home'>
                <div className='App-bar' onClick={() => props.handleShowCanvas()}>
                    <FontAwesomeIcon icon={faBars} size="lg" />
                </div>
                <div className='App-logo'>
                    <a href='/'><Image src={props.logo} alt='logo' fluid /></a>
                </div>
            </div>
            <div className='App-support'>
                <div className='question-icon'>
                    <FontAwesomeIcon icon={faCircleQuestion} size='lg' />
                </div>
                <div className='phone-number'>
                    Hỗ trợ <br />
                    033xxxxx33
                </div>
            </div>
            {Object.keys(props.user).length === 0 ?
                <>
                    <div className="App-login" >
                        <Button variant="outline-light" onClick={() => props.handleShowLogin()}>
                            <h6>Đăng nhập</h6>
                            <small>Dành cho nhân viên hệ thống</small>
                        </Button>
                    </div>
                </>
                :
                <>
                    <div className="App-user fs-6 my-auto text-white mx-5">
                        Chào mừng,<br />
                        {props.user.name}
                    </div>
                </>
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return ({
        user: state.user
    })
}

export default connect(mapStateToProps)(Header)