import { Button } from "react-bootstrap"
import "../../styles/Specialties/Specialties.scss"
import Specialty from "./Specialty"
import useFetch from "../../custom/fetch"

const Specialties = (props) => {
    const { data, loading } = useFetch('http://localhost:8080/api/specialties')
    return (
        <div className="specialties-container">
            <div className="specialties-title">
                <Button variant="outline-secondary" size="sm" onClick={() => { window.history.back() }}>Quay lại</Button>
                <b>Danh sách các chuyên khoa</b>
            </div>
            <div className="specialties-content">
                {loading === false ?
                    <>
                        {data?.length ?
                            <>
                                {data.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <Specialty data={item} />
                                        </div>
                                    )
                                })
                                }
                            </>
                            :
                            <>
                                <div className="specialties-nodata">
                                    Không có dữ liệu
                                </div>
                            </>
                        }
                    </>
                    :
                    <>
                        <div className="specialties-loading">
                            Đang tải dữ liệu ...
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Specialties