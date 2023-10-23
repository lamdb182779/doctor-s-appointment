import { Image } from "react-bootstrap"
import loading from "../../../assets/images/document.png"
import { useEffect } from "react"
import "../../../styles/General/Notfound/Loading.scss"

const Loading = (props) => {
    useEffect(() => {
        const resize = () => {
            const container = document.querySelector(".loading-container")
            const scale = document.querySelector(".scale-div")
            if (scale) {
                scale.style.width = container.offsetWidth / 0.5 + "px"
                scale.style.height = container.offsetHeight / 0.5 + "px"
            }
        }
        window.addEventListener("resize", resize)
        resize()
    }, [])
    return (
        <div className="loading-container w-100 my-5 d-flex justify-content-center">
            <Image className="w-75 h-auto" src={loading} />
            <div className="magnifying-glass shadow">
                <div className=" scale-div my-5 d-flex justify-content-center">
                    <Image className="w-75 h-auto" src={loading} />
                </div>
            </div>
            <div className="magnifying-handle shadow bg-dark" />
        </div>
    )
}

export default Loading