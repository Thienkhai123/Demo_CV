import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './Store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { MyTranslate } from './translation/i18'

const LANGUAGE = localStorage.getItem('language')

i18n.use(initReactI18next) // passes i18n down to react-i18next
	.init(MyTranslate(LANGUAGE || 'vi'))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
			<ToastContainer />
		</Provider>
	</React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
