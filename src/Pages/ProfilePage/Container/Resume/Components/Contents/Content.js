import React from 'react'

const Content = (props) => {
	const { title = '', timedate = '', description = '' } = props
	return (
		<div className='content-text'>
			<h3 className='line-title'>{title}</h3>
			<span>{timedate}</span>
			<p className='line-text'>{description}</p>
		</div>
	)
}

export default Content
