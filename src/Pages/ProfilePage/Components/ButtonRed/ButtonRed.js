import React from 'react'

const ButtonRed = (props) => {
	const { icon, title = '' } = props
	return (
		<a href='#' className='btn btn-danger'>
			{icon} {title}
		</a>
	)
}

export default ButtonRed
