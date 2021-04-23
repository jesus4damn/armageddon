import {createStore} from 'redux'
// import createSagaMiddleware from 'redux-saga'
import {rootReducer} from "./reducers/rootReducer"
// import rootSaga from './sagas/rootSaga'
import logger from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootPersistConfig = {
    key: 'rootStorage',
    storage: storage,
    whitelist: ['destroy']
}
// const sagaMiddleware = createSagaMiddleware()
// const middleware: any[] = [sagaMiddleware]
const middleware: any[] = []
if (process.env.NODE_ENV === 'development') middleware.push(logger)

// const store: any = createStore(rootReducer, applyMiddleware(...middleware))
const pReducer = persistReducer(rootPersistConfig, rootReducer)
const store: any = createStore(pReducer)
const persistor = persistStore(store)
// sagaMiddleware.run(rootSaga)

export { store, persistor }
