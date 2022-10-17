import React from 'react'
import CounterWork from './Components/CounterWork/CounterWork'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { selectSkill } from '../../../../Store/ProfileSlice/profileSlice'
import { useTranslation } from 'react-i18next'

const Work = (props) => {
	const skill = useSelector(selectSkill)
	const { t } = useTranslation('translation', { keyPrefix: 'work' })

	return (
		<div>
			<section id='portfolios' className='section-padding'>
				<div className='container'>
					<h2
						className='section-title wow flipInX'
						data-wow-delay='0.4s'>
						{t('OutstandingProject')}
					</h2>
				</div>
			</section>

			<section className='counter-section section-padding'>
				<div className='container'>
					<div className='row'>
						{skill?.map((item, index) => {
							const { icon, resune, skillTitle } = item
							return (
								<div
									className='col-md-3 col-sm-6 work-counter-widget text-center'
									key={index}>
									<CounterWork
										icon={icon}
										counter={resune}
										title={skillTitle}
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
	Skiill: PropTypes.arrayOf(
		PropTypes.shape({
			icon: PropTypes.string,
			resune: PropTypes.number,
			Skilltitle: PropTypes.string,
		}),
	),
}

Work.defaultProps = {
	Skiill: [
		{
			icon: 'icon-briefcase',
			resune: 80,
			Skilltitle: 'JAVASCRIPT',
		},
		{
			icon: 'icon-check',
			counter: '',
			resune: 70,
			Skilltitle: 'C#',
		},
		{
			icon: 'icon-diamond',
			counter: '',
			resune: 60,
			Skilltitle: 'SQL',
		},
		{
			icon: 'icon-heart',
			counter: '',
			resune: 50,
			Skilltitle: 'ENGLISH',
		},
	],
}
