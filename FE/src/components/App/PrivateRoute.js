import { connect } from "react-redux"

import NotFound from "../General/Notfound/Notfound"
import useFetch from "../../custom/fetch"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import NotPermission from "../General/Notfound/NotPermission"

const PrivateRoute = (props) => {
    const navigate = useNavigate()
    const { data, loading, message } = useFetch('http://localhost:8080/api/self')
    useEffect(() => {
        if (loading === false && message !== '') {
            switch (message) {
                case "ok":
                    props.setUser(data[0])
                    break
                case "missing token":
                    props.setUser({})
                    navigate('/')
                    break
                case "wrong token":
                    break
                case "wrong table":
                    break
                case "access denied":
                    break
                default: break
            }
        }
    }, [loading])// eslint-disable-line react-hooks/exhaustive-deps
    if (loading === false) {
        if (props.element) {
            if (props.table?.length > 0) {
                if (props.user?.table) {
                    if (props.table.includes(props.user.table)) {
                        return props.element
                    }
                    return <NotPermission />
                }
                return <NotPermission />
            }
            return props.element
        }
        return <NotFound />
    }
    return <></>
}

const mapStateToProps = (state) => {
    return ({
        user: state.user
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        setUser: (user) => dispatch({ type: 'SET_USER', payload: user }),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
