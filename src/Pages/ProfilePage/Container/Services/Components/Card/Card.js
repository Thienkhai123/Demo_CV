import React from 'react'

const Card = (props) => {
	const {
		delay = '0.6s',
		icon = <i className='icon-layers'></i>,
		href = '#',
		title = 'Graphic Design',
		description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse condi.',
	} = props
	return (
		<div className='services-item wow fadeInDown' data-wow-delay={delay}>
			<div className='icon'>{icon}</div>
			<div className='services-content'>
				<h3>
					<a href={href}>{title}</a>
				</h3>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default Card
