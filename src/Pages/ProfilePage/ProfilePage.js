import React, { useState } from 'react'
import '../../App.css'
import HederProfile from '../components/HeaderProfile/HederProfile.js'
import BodyProfile from '../components/BodyProfile/BodyProfile.js'
import FooterProfile from '../components/FooterProfile/FooterProfile.js'
import { DataProfile } from '../Json/DataProfile'

const ProfilePage = () => {
	const hdbProfile = {
		avatar: DataProfile.avatar,
		name: DataProfile.name,
		nominee: DataProfile.nominee,
		information: DataProfile.information,
	}

	const BodydbProfile = {
		birthday: DataProfile.birthday,
		addressContact: DataProfile.addressContact,
		education: DataProfile.education,
		workExperience: DataProfile.workExperience,
	}

	const fdbProfile = {
		Skiill: DataProfile.Skiill,
		BusinessAnalyst: DataProfile.BusinessAnalyst,
	}

	return (
		<div>
			<div className='containerCover container'>
				<div>
					<HederProfile hdbProfile={hdbProfile} />
				</div>
				<div>
					<BodyProfile BodydbProfile={BodydbProfile} />
				</div>
				<div>
					<FooterProfile fdbProfile={fdbProfile} />
				</div>
			</div>
		</div>
	)
}

export default ProfilePage
