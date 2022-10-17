import React from 'react'

const IconEduca = (props) => {
	const { icon = 'icon-graduation', title = 'Education' } = props
	return (
		<li>
			<i className={icon}></i>
			<h2 className='timelin-title'>{title}</h2>
		</li>
	)
}

export default IconEduca
