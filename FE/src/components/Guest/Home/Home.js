import "../../../styles/Guest/Home/Home.scss"

import Introduce from "./Introduce"
import Nav from "../../App/Nav"
import HomeTitle from "./HomeTitle"
import Statistic from "./Statistic"

import { useEffect, useRef } from "react"

import { Row, Col } from "react-bootstrap"
import SpecialtiesPreview from "./SpecialtiesPreview"
import DoctorsPreview from "./DoctorsPreview"

const Home = (props) => {
    const infoRef = useRef(null)
    const contentRef = useRef(null)

    useEffect(() => {
        const elements = contentRef.current.querySelectorAll("[id^='element']")

        const handleScroll = () => {
            const windowHeight = window.innerHeight || document.documentElement.clientHeight

            for (let i = 0; i < elements.length; i++) {
                const element = elements[i]
                const { top, bottom } = element.getBoundingClientRect()
                if (top < windowHeight - 200 && bottom >= 200) {
                    element.classList.add("show")
                } else {
                    element.classList.remove("show")
                }
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    return (
        <div className="home-container">
            <Row className="d-flex justify-content-center">
                <Col xs={2} className="p-0">
                    <div className="left-nav">
                        <div className="px-2 w-100 m-0">
                            <Nav />
                        </div>
                    </div>
                </Col>
                <Col ref={contentRef} className="main-element p-0 d-grid" xs={9}>
                    <Row id="element1" className="element show">
                        <HomeTitle infoRef={infoRef} />
                    </Row>
                    <Row id="element2" className="element fs-6 fw-bold p-5 shadow">
                        <Statistic />
                    </Row>
                    <Row id="element3" className="element" ref={infoRef}>
                        <Introduce />
                    </Row>
                    <Row id="element4" className="element">
                        <DoctorsPreview />
                    </Row>
                    <Row id="element5" className="element">
                        <SpecialtiesPreview />
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Home