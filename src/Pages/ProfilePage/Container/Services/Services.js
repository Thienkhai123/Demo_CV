import React, { useEffect, useState } from 'react'
import Card from './Components/Card/Card'
import PropTypes from 'prop-types'

const Services = (props) => {
	const { workExperience } = props
	const servicesData = {
		title: 'DỰ ÁN THỰ THI',
	}
	const { title } = servicesData

	return (
		<div>
			<section id='services' className='services section-padding'>
				<h2 className='section-title wow flipInX' data-wow-delay='0.4s'>
					{title || ''}
				</h2>
				<div className='container'>
					<div className='row'>
						{workExperience?.map((item, index) => {
							const {
								icon,
								href,
								ProjectPosition,
								ProjectTitle,
							} = item
							return (
								<div
									className='col-md-6 col-lg-3 col-xs-12'
									key={index}>
									<Card
										delay='0.3s'
										icon={icon}
										href={href}
										title={ProjectPosition}
										description={ProjectTitle}
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

export default Services
Services.propTypes = {
	workExperience: PropTypes.oneOfType([
		PropTypes.shape({
			ProjectName: PropTypes.string,
			ProjectPosition: PropTypes.string,
			startTime: PropTypes.string,
			endTime: PropTypes.string,
			icon: PropTypes.string,
			href: PropTypes.string,
			ProjectTitle: PropTypes.string,
		}),
	]),
}

Services.defaultProps = {
	workExperience: [
		{
			ProjectName: 'HTP',
			ProjectPosition: 'FRONT-END DEVELOPMENT',
			startTime: '04-2022',
			endTime: '06-2022',
			icon: <i className='icon-grid'></i>,
			href: '#',
			ProjectTitle:
				'Dự án quản lý mua bán khóa học. Ngoài ra, website còn hỗ trợ cho việc học thảo luận trao đổi cùng nhau.',
		},
		{
			ProjectName: 'IZI',
			ProjectPosition: 'FRONT-END DEVELOPMENT',
			startTime: '08-2022',
			endTime: '09-2022',
			icon: <i className='icon-layers'></i>,
			href: '#',
			ProjectTitle:
				'Dự án quản lý mua bán Coin, thực hiện quản lý các câu hỏi trong game.',
		},
		{
			ProjectName: 'STUDIO',
			ProjectPosition: 'GRAPHIC DESIGN ',
			startTime: '04-2021',
			endTime: '09-2021',
			icon: <i className='icon-briefcase'></i>,
			href: '#',
			ProjectTitle:
				'Quản lý và thiết kế ảnh trước khi hoàn thành cho khách hàng',
		},
		{
			ProjectName: 'STUDIO',
			ProjectPosition: 'SALE',
			startTime: '04-2021',
			endTime: '09-2021',
			icon: <i className='icon-bubbles'></i>,
			href: '#',
			ProjectTitle:
				'Tìm kiếm khách hàng, giới thiệu cho khách hàng về những thông tin cần thiết',
		},
	],
}
