import React from 'react'

const CounterWork = (props) => {
	const {
		icon = <i className='icon-briefcase'></i>,
		counter = '250',
		delay = '0.3s',
		title = 'Project Working',
	} = props
	return (
		<div className='counter wow fadeInDown' data-wow-delay={delay}>
			<div className='icon'>{icon}</div>
			<div className='counterUp'>{counter}</div>
			<p>{title}</p>
		</div>
	)
}

export default CounterWork
