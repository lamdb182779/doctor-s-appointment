import { useState } from "react"
import "../../styles/Page/Page.scss"

import { Pagination, Form, Button, Col, Row } from "react-bootstrap"

const Page = (props) => {
    const pagination = []
    const len = props.len || 1
    const page = props.page || 1
    const size = props.size || "lg"
    const handlePage = (num) => {
        props.handlePage && props.handlePage(num)
    }
    const [isShowTypePage, setIsShowTypePage] = useState(false)
    const [typePage, setTypePage] = useState(page.toString())
    if (len <= 9) {
        for (let num = 1; num <= len; num++) {
            pagination.push(
                <Pagination.Item key={num} active={num === page} onClick={() => handlePage(num)}>
                    {num}
                </Pagination.Item>
            )
        }
        return (
            <div className="pagination">
                <Pagination size={size}>
                    <Pagination.First onClick={() => handlePage(1)} />
                    <Pagination.Prev onClick={() => handlePage(page <= 1 ? 1 : page - 1)} />
                    {pagination}
                    <Pagination.Next onClick={() => handlePage(page >= len ? len : page + 1)} />
                    <Pagination.Last onClick={() => handlePage(len)} />
                </Pagination>
            </div>
        )
    }
    if (page <= 4) {
        for (let num = 1; num <= page + 1; num++) {
            pagination.push(
                <Pagination.Item key={num} active={num === page} onClick={() => handlePage(num)}>
                    {num}
                </Pagination.Item>
            )
        }
        return (
            <>
                <div className="pagination">
                    <Pagination size={size}>
                        <Pagination.First onClick={() => handlePage(1)} />
                        <Pagination.Prev onClick={() => handlePage(page <= 1 ? 1 : page - 1)} />
                        {pagination}
                        <Pagination.Ellipsis onClick={() => setIsShowTypePage(!isShowTypePage)} />
                        <Pagination.Item key={len} onClick={() => handlePage(len)}>{len}</Pagination.Item>
                        <Pagination.Next onClick={() => handlePage(page >= len ? len : page + 1)} />
                        <Pagination.Last onClick={() => handlePage(len)} />
                    </Pagination>
                </div>
                {isShowTypePage === true ?
                    <>
                        <Form.Group className="type-page w-25 mx-auto fs-6">
                            <Row >
                                <Col xs={5} className="align-self-center">
                                    Nhập trang:
                                </Col>
                                <Col xs={3}>
                                    <Form.Control
                                        type="search"
                                        aria-label="Search"
                                        size="sm"
                                        value={typePage}
                                        onChange={(event) => setTypePage(event.target.value)}
                                    />
                                </Col>
                                <Col xs={4}>
                                    <Button className="w-100" size="sm" variant="outline-secondary"
                                        onClick={() => handlePage(isNaN(parseInt(typePage)) ? 1 : parseInt(typePage))}>Đi tới</Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </>
                    :
                    <></>
                }
            </>
        )
    }
    if (page >= len - 3) {
        for (let num = page - 1; num <= len; num++) {
            pagination.push(
                <Pagination.Item key={num} active={num === page} onClick={() => handlePage(num)}>
                    {num}
                </Pagination.Item>
            )
        }
        return (
            <>
                <div className="pagination">
                    <Pagination size={size}>
                        <Pagination.First onClick={() => handlePage(1)} />
                        <Pagination.Prev onClick={() => handlePage(page <= 1 ? 1 : page - 1)} />
                        <Pagination.Item key={1} onClick={() => handlePage(1)}>{1}</Pagination.Item>
                        <Pagination.Ellipsis onClick={() => setIsShowTypePage(!isShowTypePage)} />
                        {pagination}
                        <Pagination.Next onClick={() => handlePage(page >= len ? len : page + 1)} />
                        <Pagination.Last onClick={() => handlePage(len)} />
                    </Pagination>
                </div>
                {isShowTypePage === true ?
                    <>
                        <Form.Group className="type-page w-25 mx-auto fs-6">
                            <Row >
                                <Col xs={5} className="align-self-center">
                                    Nhập trang:
                                </Col>
                                <Col xs={3}>
                                    <Form.Control
                                        type="search"
                                        aria-label="Search"
                                        size="sm"
                                        value={typePage}
                                        onChange={(event) => setTypePage(event.target.value)}
                                    />
                                </Col>
                                <Col xs={4}>
                                    <Button className="w-100" size="sm" variant="outline-secondary"
                                        onClick={() => handlePage(isNaN(parseInt(typePage)) ? 1 : parseInt(typePage))}>Đi tới</Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </>
                    :
                    <></>
                }
            </>
        )
    }
    for (let num = page - 1; num <= page + 1; num++) {
        pagination.push(
            <Pagination.Item key={num} active={num === page} onClick={() => handlePage(num)}>
                {num}
            </Pagination.Item>
        )
    }
    return (
        <>
            <div className="pagination">
                <Pagination size={size}>
                    <Pagination.First onClick={() => handlePage(1)} />
                    <Pagination.Prev onClick={() => handlePage(page <= 1 ? 1 : page - 1)} />
                    <Pagination.Item key={1} onClick={() => handlePage(1)}>{1}</Pagination.Item>
                    <Pagination.Ellipsis onClick={() => setIsShowTypePage(!isShowTypePage)} />
                    {pagination}
                    <Pagination.Ellipsis onClick={() => setIsShowTypePage(!isShowTypePage)} />
                    <Pagination.Item key={len} onClick={() => handlePage(len)}>{len}</Pagination.Item>
                    <Pagination.Next onClick={() => handlePage(page >= len ? len : page + 1)} />
                    <Pagination.Last onClick={() => handlePage(len)} />
                </Pagination>
            </div>
            {isShowTypePage === true ?
                <>
                    <Form.Group className="type-page w-25 mx-auto fs-6">
                        <Row >
                            <Col xs={5} className="align-self-center">
                                Nhập trang:
                            </Col>
                            <Col xs={3}>
                                <Form.Control
                                    type="search"
                                    aria-label="Search"
                                    size="sm"
                                    value={typePage}
                                    onChange={(event) => setTypePage(event.target.value)}
                                />
                            </Col>
                            <Col xs={4}>
                                <Button className="w-100" size="sm" variant="outline-secondary"
                                    onClick={() => handlePage(isNaN(parseInt(typePage)) ? 1 : parseInt(typePage))}>Đi tới</Button>
                            </Col>
                        </Row>
                    </Form.Group>
                </>
                :
                <></>
            }
        </>
    )
}

export default Page