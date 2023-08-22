import { connect } from "react-redux"

import NotFound from "../General/Notfound/Notfound"

const PrivateRoute = (props) => {
    if (props.user && props.element) {

        if (props.table) {
            if (props.table === props.user.table) {
                return props.element
            }
            return <NotFound />
        }
        return props.element
    }
    return <NotFound />
}

const mapStateToProps = (state) => {
    return ({
        user: state.user
    })
}

export default connect(mapStateToProps)(PrivateRoute)
