import './App.css'
import ProfilePage from './Pages/ProfilePage/Index.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<ProfilePage />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
