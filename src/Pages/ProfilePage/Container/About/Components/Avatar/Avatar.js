import React from 'react'

const Avatar = (props) => {
	const { img = 'assets/img/about/about-1.jpg' } = props
	return (
		<div className='img-thumb wow fadeInLeft' data-wow-delay='0.3s'>
			<img className='img-fluid' src={img} alt='' />
		</div>
	)
}

export default Avatar
