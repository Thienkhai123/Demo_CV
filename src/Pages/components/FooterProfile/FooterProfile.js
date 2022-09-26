import React, { useState } from 'react'
import '../Profile.css'
const FooterProfile = (props) => {
	const { fdbProfile } = props

	return (
		<div>
			<div className='row d-flex justify-content-center'>
				<div className='col'>
					<h4>Kỹ năng</h4>
					{fdbProfile.Skiill.map((item) => {
						return <li className='textConver'>{item.Skilltitle}</li>
					})}
				</div>
				<div className='col'>
					<h4>Business Analyst</h4>
					{fdbProfile.BusinessAnalyst.map((item) => {
						return (
							<div>
								<div className='d-flex'>
									<h5 className='textConver'>
										{item.BusinessName}
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
									{item.BusinessTitle}
								</p>
								{item.BusinessWorks.map((itemSkill) => {
									return (
										<div>
											<li className='textConver'>
												{itemSkill.BusinessText}
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

export default FooterProfile
