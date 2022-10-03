import React from 'react'

const AboutProfile = (props) => {
	const { title = '', text = '' } = props
	return (
		<li>
			<span className='pro-title'> {title} </span>
			<span className='pro-detail'>{text}</span>
		</li>
	)
}

export default AboutProfile
