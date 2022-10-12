import React, { useEffect, useState } from 'react'
import Footer from '../Container/Footer/Footer'
import Header from '../Container/Header/Header'
import ScrollButton from './Components/ScrollButton/ScrollButton'
import About from './Container/About/About'
import Contact from './Container/Contact/Contact'
import Home from './Container/Home/Home'
import Resume from './Container/Resume/Resume'
import Services from './Container/Services/Services'
import Work from './Container/Work/Work'
import useLoading from '../../hook/useLoading/useLoading'
import Loader from '../Components/Loader/Loader'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getProfile } from '../../Store/ProfileSlice/profileSlice'

const ProfilePage = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getProfile())
	}, [dispatch])

	return (
		<div>
			<div>
				<div>
					<Header />
				</div>
				<div>
					<Home />
				</div>
				<div>
					<About />
				</div>
				<div>
					<Services />
				</div>
				<div>
					<Resume />
				</div>
				<div>
					<Work />
				</div>
				<div>
					<Contact />
				</div>
				<div>
					<Footer />
				</div>
				<div>
					<ScrollButton />
				</div>
			</div>
		</div>
	)
}

export default ProfilePage
