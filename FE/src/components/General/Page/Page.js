import { useState } from "react"
import "../../../styles/General/Page/Page.scss"

import { Pagination, Form, Button, Col, Row, OverlayTrigger, Popover } from "react-bootstrap"

const Page = (props) => {
    const pagination = []
    const len = props.len || 1
    const page = props.page || 1
    const size = props.size || ""
    const handlePage = (num) => {
        props.handlePage && props.handlePage(num)
    }
    const [typePage, setTypePage] = useState(page.toString())
    const renderTypePage = (props) => {
        return (
            <Popover {...props} id="type-page-popover">
                <Popover.Body>
                    <Row >
                        <Col xs={5} className="align-self-center">
                            Nhập trang:
                        </Col>
                        <Col xs={3} className="p-0">
                            <Form.Control
                                type="search"
                                aria-label="Search"
                                size="sm"
                                value={typePage}
                                onChange={event => setTypePage(event.target.value)}
                            />
                        </Col>
                        <Col xs={4}>
                            <Button className="w-100" size="sm" variant="outline-secondary"
                                onClick={() => handlePage(isNaN(parseInt(typePage)) ? 1 : parseInt(typePage))}>Đi tới</Button>
                        </Col>
                    </Row>
                </Popover.Body>
            </Popover>
        )
    }
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
                        <OverlayTrigger
                            rootClose
                            trigger={"click"}
                            placement="auto"
                            overlay={renderTypePage}>
                            <Pagination.Ellipsis />
                        </OverlayTrigger>
                        <Pagination.Item key={len} onClick={() => handlePage(len)}>{len}</Pagination.Item>
                        <Pagination.Next onClick={() => handlePage(page >= len ? len : page + 1)} />
                        <Pagination.Last onClick={() => handlePage(len)} />
                    </Pagination>
                </div>
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
                        <OverlayTrigger
                            rootClose
                            trigger={"click"}
                            placement="auto"
                            overlay={renderTypePage}>
                            <Pagination.Ellipsis />
                        </OverlayTrigger>
                        {pagination}
                        <Pagination.Next onClick={() => handlePage(page >= len ? len : page + 1)} />
                        <Pagination.Last onClick={() => handlePage(len)} />
                    </Pagination>
                </div>
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

                    <OverlayTrigger
                        rootClose
                        trigger={"click"}
                        placement="auto"
                        overlay={renderTypePage}>
                        <Pagination.Ellipsis />
                    </OverlayTrigger>
                    {pagination}

                    <OverlayTrigger
                        rootClose
                        trigger={"click"}
                        placement="auto"
                        overlay={renderTypePage}>
                        <Pagination.Ellipsis />
                    </OverlayTrigger>
                    <Pagination.Item key={len} onClick={() => handlePage(len)}>{len}</Pagination.Item>
                    <Pagination.Next onClick={() => handlePage(page >= len ? len : page + 1)} />
                    <Pagination.Last onClick={() => handlePage(len)} />
                </Pagination>
            </div>
        </>
    )
}

export default Page