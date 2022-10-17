import React from 'react'

const ScrollButton = (props) => {
	const { href = '#', icon = 'icon-arrow-up' } = props
	return (
		<a href={href} className='back-to-top'>
			<i className={icon}></i>
		</a>
	)
}

export default ScrollButton
