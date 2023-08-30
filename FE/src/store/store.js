
import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./reducers/rootReducer"
import rootSaga from "./sagas/rootSaga"

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

export const reduxStore = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga)