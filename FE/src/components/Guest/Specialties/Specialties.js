import "../../../styles/Guest/Specialties/Specialties.scss"
import { Row, Col, Image } from "react-bootstrap"
import Nav from "../../App/Nav"
import { useState, useEffect, useRef } from "react"
import useFetch from "../../../custom/fetch"
import useUtil from "../../../custom/utils"
import nullavatar from "../../../assets/images/nullavatarspecialty.jpg"
import ReactMarkdown from "react-markdown"

const Specialties = (props) => {
    const descriptionRef = useRef(null)
    const [data, setData] = useState([])
    const [offset, setOffset] = useState(0)
    const [isMounted, setIsMounted] = useState(false)
    const [onEnter, setOnEnter] = useState(0)

    const { handleNavigate } = useUtil()

    const { data: newData, loading } = useFetch(`http://localhost:8080/api/specialties?offset=${offset}&limit=4`)

    useEffect(() => {
        if (loading === false) {
            setIsMounted(true)
            setData([...data, ...newData])
        }
    }, [loading])// eslint-disable-line react-hooks/exhaustive-deps


    const handleScroll = (event) => {
        const scrollHeight = event.target.documentElement.scrollHeight
        const currentHeight = event.target.documentElement.scrollTop + window.innerHeight
        if (currentHeight + 1 >= scrollHeight) {
            setOffset(offset + 4)
            window.removeEventListener("scroll", handleScroll)
        }
    }

    const handleOnEnter = (index) => {
        if (onEnter !== index) {
            const milis = (new Date()).getMilliseconds()
            const hide = milis % 2 ? "hideX" : "hideY"
            descriptionRef.current.classList.add(hide)
            setTimeout(() => {
                setOnEnter(index)
                descriptionRef.current.classList.remove(hide)
            }, 200)
        }
    }

    useEffect(() => {
        if (newData.length === 4) {
            window.addEventListener("scroll", handleScroll)
        }
    }, [data])// eslint-disable-line react-hooks/exhaustive-deps

    const handleSpecialtyDoctors = (id) => {
        let path = `/doctors?specialtyID=${id}`
        handleNavigate(path)
    }
    return (
        <div className="specialties-container">
            <Row className="d-flex justify-content-center">
                <Col xs={2} className="p-0">
                    <div className="px-2 w-100 m-0 left-nav">
                        <Nav />
                    </div>
                </Col>
                <Col className="main-element p-5 d-grid gap-4" xs={5}>
                    <Row className="">
                        <h3>Danh sách các chuyên khoa</h3>
                    </Row>
                    {loading === false || isMounted === true ?
                        <>
                            {data?.length > 0 ?
                                <>
                                    {data.map((item, index) => {
                                        return (
                                            <Row key={index} className="specialty"
                                                onClick={() => handleSpecialtyDoctors()}
                                                onMouseEnter={() => handleOnEnter(index)}>
                                                <Image className="p-0" src={item.image ? item.image : nullavatar} alt={item.name} />
                                                <div className="w-100 h-25 p-0">
                                                    {item.name}
                                                </div>
                                            </Row>
                                        )
                                    })
                                    }
                                </>
                                :
                                <></>
                            }
                        </>
                        :
                        <></>
                    }
                </Col>
                <Col xs={4} className="p-0">
                    <div ref={descriptionRef} className="right-content w-100 m-0 ">
                        <div className="text-center fs-4">
                            {data[onEnter]?.name ? data[onEnter].name : ""}
                        </div>
                        <div>
                            <ReactMarkdown>
                                {!data[onEnter] ? ""
                                    : data[onEnter].description ? data[onEnter].description
                                        : "Chưa có mô tả về chuyên khoa này"}
                            </ReactMarkdown>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Specialties