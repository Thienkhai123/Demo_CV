import React from 'react'

const ScrollButton = (props) => {
	const { href = '#', icon = <i className='icon-arrow-up'></i> } = props
	return (
		<a href={href} className='back-to-top'>
			{icon}
		</a>
	)
}

export default ScrollButton
