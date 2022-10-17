import React from 'react'

const IconContent = (props) => {
	const {
		icon = 'icon-social-facebook',
		refH = '#',
		className = 'facebook',
	} = props

	return (
		<li>
			<a className={className} href={refH}>
				<i className={icon}></i>
			</a>
		</li>
	)
}

export default IconContent
