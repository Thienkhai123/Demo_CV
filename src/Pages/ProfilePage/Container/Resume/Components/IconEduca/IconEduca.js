import React from 'react'

const IconEduca = (props) => {
	const { icon = <i className='icon-graduation'></i>, title = 'Education' } =
		props
	return (
		<li>
			{icon}
			<h2 className='timelin-title'>{title}</h2>
		</li>
	)
}

export default IconEduca
