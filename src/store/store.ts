import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {rootReducer} from "./reducers/rootReducer"
import rootSaga from './sagas/rootSaga'
import logger from 'redux-logger'


const sagaMiddleware = createSagaMiddleware()
const middleware: any[] = [sagaMiddleware]
if (process.env.NODE_ENV === 'development') middleware.push(logger)

const store: any = createStore(rootReducer, applyMiddleware(...middleware))
sagaMiddleware.run(rootSaga)

export { store }
