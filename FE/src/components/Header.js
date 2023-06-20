import "../styles/App/Header.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars,
    faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons'

import { Image } from "react-bootstrap"

const Header = (props) => {
    return (
        <>
            <div className='App-home'>
                <div className='App-bar' onClick={() => props.handleShow()}>
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
        </>
    )
}

export default Header