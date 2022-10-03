import React from 'react'

const ButtonBlue = (props) => {
	const { icon, title = '' } = props
	return (
		<a href='#' className='btn btn-common'>
			{icon} {title}
		</a>
	)
}

export default ButtonBlue
