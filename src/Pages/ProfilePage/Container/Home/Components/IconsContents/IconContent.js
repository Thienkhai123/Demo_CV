import React from 'react'

const IconContent = (props) => {
	const {
		icon = <i className='icon-social-facebook'></i>,
		refH = '#',
		className = 'facebook',
	} = props

	return (
		<li>
			<a className={className} href={refH}>
				{icon}
			</a>
		</li>
	)
}

export default IconContent
