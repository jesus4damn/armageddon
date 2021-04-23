import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/index.scss'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {persistor, store} from './store/store'
import { PersistGate } from 'redux-persist/integration/react'
  
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)

