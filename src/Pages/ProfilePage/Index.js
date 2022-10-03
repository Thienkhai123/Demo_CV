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
import { ProfileService } from '../../Services/ProfileService'
import useLoading from '../../hook/useLoading'
import Loader from '../Components/Loader/Loader'

const ProfilePage = () => {
	const [dataContainer, setData] = useState({})

	const fechData = async () => {
		const response = await ProfileService()
		setData(response)
	}

	const [fechapi, isFechApi] = useLoading(fechData)

	useEffect(() => {
		fechapi()
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
	} = dataContainer

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
