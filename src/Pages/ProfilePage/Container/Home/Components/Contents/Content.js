import React from 'react'

const Content = (props) => {
	const { title = '', name = '', field = '' } = props
	return (
		<div>
			<h5 className='script-font wow fadeInUp' data-wow-delay='0.2s'>
				{title}
			</h5>
			<h2 className='head-title wow fadeInUp' data-wow-delay='0.4s'>
				{name}
			</h2>
			<p className='script-font wow fadeInUp' data-wow-delay='0.6s'>
				{field}
			</p>
		</div>
	)
}

export default Content
