import React, { useEffect, useState } from 'react'
import '../Profile.css'

const BodyProfile = (props) => {
	const { BodydbProfile } = props

	return (
		<div>
			<div className='d-flex justify-content-center '>
				<p className='textConver'>
					{BodydbProfile.addressContact.address}{' '}
				</p>
				<p className='textConver'>
					{BodydbProfile.addressContact.email}{' '}
				</p>
				<p className='textConver'>
					{BodydbProfile.addressContact.phone}{' '}
				</p>
				<p className='textConver'>
					{BodydbProfile.addressContact.instagram}{' '}
				</p>
			</div>
			<div className='row'>
				<div className='col'>
					<h4>Học vấn</h4>
					{BodydbProfile.education.map((item) => {
						return (
							<div>
								<h5 className='textConver'>
									{item.schoolName}
								</h5>
								<div className='d-flex '>
									<h5 className='textConver'>
										{item.Schoolfield}
									</h5>
									<h5
										className='textConver'
										style={{ marginLeft: '2rem' }}>
										{item.startTime}
									</h5>
									<h5
										className='textConver'
										style={{ marginLeft: '2rem' }}>
										{item.endTime}
									</h5>
								</div>
								<p className='textConver'>
									{item.SchoolthesisTitle}
								</p>
								{item.SchoollearnKills.map((itemSkill) => {
									return (
										<div>
											<li className='textConver'>
												{itemSkill.killText}
											</li>
										</div>
									)
								})}
							</div>
						)
					})}
				</div>
				<div className='col'>
					<h4>Kinh nghiệm làm việc</h4>
					{BodydbProfile.workExperience.map((item) => {
						return (
							<div>
								<h5 className='textConver'>
									{item.ProjectName}
								</h5>
								<div className='d-flex'>
									<h5 className='textConver'>
										{item.ProjectPosition}
									</h5>
									<h5
										className='textConver'
										style={{ marginLeft: '2rem' }}>
										{item.startTime}
									</h5>
									<h5
										className='textConver'
										style={{ marginLeft: '2rem' }}>
										{item.endTime}
									</h5>
								</div>
								<p className='textConver'>
									{item.ProjectTitle}
								</p>
								{item.ProjectuseKill.map((itemSkill) => {
									return (
										<div>
											<li className='textConver'>
												{itemSkill.useKillText}
											</li>
										</div>
									)
								})}
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default BodyProfile
