import React, { useState } from 'react'
import ButtonBlue from '../../Components/ButtonBlue/ButtonBlue'
import Content from './Components/Contents/Content'
import IconContent from './Components/IconsContents/IconContent'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { selectHome } from '../../../../Store/ProfileSlice/profileSlice'
import { ICON_LIST } from './Contant'
import { selectLoading } from '../../../../Store/LoadingSlice/loadingSlice'
import { TYPES } from '../../../../Store/type'
import Loader from '../../../Components/Loader/Loader'
import { useTranslation } from 'react-i18next'

const Home = (props) => {
	const data = useSelector(selectHome)
	const { t, i18n } = useTranslation('translation', { keyPrefix: 'home' })

	const homeData = {
		title: 'LÝ LỊCH',
		titleSubmit: 'Bắt đầu',
	}
	const { name, field } = data
	const { title, titleSubmit } = homeData

	return (
		<div>
			<div id='hero-area' className='hero-area-bg'>
				<div className='overlay'></div>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 col-sm-12 text-center'>
							<div className='contents'>
								<Content
									title={title}
									name={name}
									field={field}
								/>
								<ul
									className='social-icon wow fadeInUp'
									data-wow-delay='0.8s'>
									{ICON_LIST.map((item, index) => {
										const { icon, refH, className } = item
										return (
											<IconContent
												key={index}
												icon={icon}
												refH={refH}
												className={className}
											/>
										)
									})}
								</ul>
								<div
									className='header-button wow fadeInUp'
									data-wow-delay='1s'>
									<ButtonBlue title={t('start')} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home

Home.propTypes = {
	data: PropTypes.shape({
		name: PropTypes.string,
		field: PropTypes.string,
	}),
}

Home.defaultProps = {
	data: {
		title: 'Lý lịch',
		name: 'NGUYỄN HOÀNG THIÊN KHẢI',
		field: 'Front-end Web Developer and Graphic Designer',
	},
}
