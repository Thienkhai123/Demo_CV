import React from 'react'
import CounterWork from './Components/CounterWork/CounterWork'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { selectSkiill } from '../../../../Store/ProfileSlice/profileSlice'

const Work = (props) => {
	const Skiill = useSelector(selectSkiill)
	return (
		<div>
			<section id='portfolios' className='section-padding'>
				<div className='container'>
					<h2
						className='section-title wow flipInX'
						data-wow-delay='0.4s'>
						DỰ ÁN NỔI BẬT
					</h2>
				</div>
			</section>

			<section className='counter-section section-padding'>
				<div className='container'>
					<div className='row'>
						{Skiill?.map((item, index) => {
							const { icon, resune, Skilltitle } = item
							return (
								<div
									className='col-md-3 col-sm-6 work-counter-widget text-center'
									key={index}>
									<CounterWork
										icon={icon}
										counter={resune}
										title={Skilltitle}
										delay='0.3s'
									/>
								</div>
							)
						})}
					</div>
				</div>
			</section>
		</div>
	)
}

export default Work

Work.propTypes = {
	Skiill: PropTypes.oneOfType([
		PropTypes.shape({
			icon: PropTypes.string,
			resune: PropTypes.string,
			Skilltitle: PropTypes.string,
		}),
	]),
}

Work.defaultProps = {
	Skiill: [
		{
			icon: <i className='icon-briefcase'></i>,
			resune: 80,
			Skilltitle: 'JAVASCRIPT',
		},
		{
			icon: <i className='icon-check'></i>,
			counter: '',
			resune: 70,
			Skilltitle: 'C#',
		},
		{
			icon: <i className='icon-diamond'></i>,
			counter: '',
			resune: 60,
			Skilltitle: 'SQL',
		},
		{
			icon: <i className='icon-heart'></i>,
			counter: '',
			resune: 50,
			Skilltitle: 'ENGLISH',
		},
	],
}
