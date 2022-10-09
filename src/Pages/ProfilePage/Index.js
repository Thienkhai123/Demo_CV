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
import { useStore } from '../../hook/useStore/useStore'
import { actions } from '../../Store'

const ProfilePage = () => {
	const [state, dispathch] = useStore()
	const { data } = state
	const [fechapi, isFechApi] = useLoading()

	useEffect(() => {
		dispathch(actions.fechApi())
	}, [])

	const {
		avatar,
		country,
		name,
		field,
		information,
		age,
		experience,
		addressContact,
		workExperience,
		education,
		experiences,
		Skiill,
	} = data

	const homeData = {
		name: name,
		field: field,
	}
	const aboutData = {
		avatar: avatar,
		information: information,
		name: name,
		age: age,
		experience: experience,
		country: country,
		addressContact: addressContact,
	}
	const resumeData = {
		education: education,
		experiences: experiences,
	}

	return (
		<div>
			{isFechApi ? (
				<Loader />
			) : (
				<div>
					<div>
						<Header />
					</div>
					<div>
						<Home data={homeData} />
					</div>
					<div>
						<About data={aboutData} />
					</div>
					<div>
						<Services workExperience={workExperience} />
					</div>
					<div>
						<Resume resumeData={resumeData} />
					</div>
					<div>
						<Work Skiill={Skiill} />
					</div>
					<div>
						<Contact addressContact={addressContact} />
					</div>
					<div>
						<Footer />
					</div>
					<div>
						<ScrollButton />
					</div>
				</div>
			)}
		</div>
	)
}

export default ProfilePage
