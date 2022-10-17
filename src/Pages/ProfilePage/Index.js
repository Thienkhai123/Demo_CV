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
import { useDispatch, useSelector } from 'react-redux'
import {
	clearProfile,
	getProfile,
	sendEmail,
} from '../../Store/ProfileSlice/profileSlice'
import { unwrapResult } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { selectLoading } from '../../Store/LoadingSlice/loadingSlice'
import { TYPES } from '../../Store/type'

const ProfilePage = () => {
	const dispatch = useDispatch()

	const onSubmit = async (data) => {
		const payload = {
			companyName: data.companyName,
			name: data.name,
			email: data.email,
			subject: data.subject,
			message: data.message,
		}
		const fetchSendEmail = await dispatch(sendEmail(payload))
		if (fetchSendEmail.meta.requestStatus === 'fulfilled') {
			toast.success('Thực hiện thành công', {
				toastId: 'get-quest-unauth',
				position: 'top-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			})
		} else {
			toast.error('Thực hiện thất bại', {
				toastId: 'get-quest-unauth',
				position: 'top-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			})
		}
	}

	const loading = useSelector((state) => state.data.loading)

	useEffect(() => {
		dispatch(getProfile())
	}, [dispatch])

	if (loading === true) return <Loader />

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
					<Contact onSubmit={onSubmit} />
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
