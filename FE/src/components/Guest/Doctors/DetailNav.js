import { useRef } from "react"
import "../../../styles/Guest/Doctors/DetailNav.scss"

const DetailNav = (props) => {
    const navRef = useRef(null)
    const topRef = props.topRef
    const contentRef = props.contentRef
    const handleClick = (mode) => {
        if (mode !== props.viewmode && props.active) {
            const navs = navRef.current.querySelectorAll("[id^='nav']")
            const contentClassList = contentRef.current.classList
            navs[props.viewmode].classList.remove("active")
            topRef.current.scrollIntoView({ behavior: "smooth" })
            contentClassList.add("flip")
            setTimeout(() => {
                if ([1, 3].includes(mode)) {
                    contentClassList.remove("main-element", "p-5")
                } else {
                    contentClassList.add("main-element", "p-5")
                }
                props.setViewmode(mode)
                contentClassList.remove("flip")
                navs[mode].classList.add("active")
            }, 200)
        }
    }
    return (
        <div ref={navRef} className="detail-nav-list fs-6 py-3">
            <div id="nav" onClick={() => handleClick(0)} className="nav-overview mb-1 rounded active">
                Tổng quan
            </div>
            <div id="nav" onClick={() => handleClick(1)} className="nav-contact mb-1 rounded">
                Phòng khám
            </div>
            <div id="nav" onClick={() => handleClick(2)} className="nav-description mb-1 rounded">
                Thông tin cụ thể
            </div>
            <div id="nav" onClick={() => handleClick(3)} className="nav-booking mb-1 rounded">
                Đặt lịch khám
            </div>
        </div>
    )
}

export default DetailNav