import React, { useState } from 'react'
import ButtonBlue from '../../Components/ButtonBlue/ButtonBlue'
import ButtonRed from '../../Components/ButtonRed/ButtonRed'
import DescriptionText from '../../Components/DescriptionText/DescriptionText'
import TitleText from '../../Components/TitleText/TitleText'
import AboutProfile from './Components/AboutProfile/AboutProfile'
import Avatar from './Components/Avatar/Avatar'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { selectAbout } from '../../../../Store/ProfileSlice/profileSlice'

const ICON_LIST = {
	blueButton: {
		icon: <i className='icon-paper-clip'></i>,
		title: 'Tải tập tin',
	},
	redButton: {
		icon: <i className='icon-speech'></i>,
		title: 'Liên hệ tôi',
	},
}

const About = (props) => {
	const data = useSelector(selectAbout)
	const { name, age, experience, country, addressContact } = data
	const aboutData = {
		avatar: data.avatar || 'assets/img/about/about-1.jpg',
		description: data.information || '',
		detail: [
			{
				title: 'Name',
				textDetail: name || '',
			},
			{
				title: 'Age',
				textDetail: age || '',
			},
			{
				title: 'Experience',
				textDetail: experience || '',
			},
			{
				title: 'Country',
				textDetail: country || 'VN',
			},
			{
				title: 'Location',
				textDetail: addressContact?.address || '',
			},
			{
				title: 'E-mail',
				textDetail: addressContact?.email || '',
			},
			{
				title: 'Phone',
				textDetail: addressContact?.phone || '',
			},
		],
	}
	const { avatar, description, detail } = aboutData

	return (
		<div>
			<section id='about' className='section-padding'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
							<Avatar img={avatar} />
						</div>
						<div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
							<div
								className='profile-wrapper wow fadeInRight'
								data-wow-delay='0.3s'>
								<TitleText title='Xin chào!' />
								<DescriptionText description={description} />
								<div className='about-profile'>
									<ul className='admin-profile'>
										{detail?.map((item, index) => {
											const { title, textDetail } = item
											return (
												<AboutProfile
													key={index}
													title={title}
													text={textDetail}
												/>
											)
										})}
									</ul>
								</div>
								<ButtonBlue
									icon={ICON_LIST?.blueButton?.icon}
									title={ICON_LIST?.blueButton?.title}
								/>
								<ButtonRed
									icon={ICON_LIST?.redButton?.icon}
									title={ICON_LIST?.redButton?.title}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default About
About.propTypes = {
	data: PropTypes.shape({
		name: PropTypes.string,
		age: PropTypes.string,
		experience: PropTypes.string,
		addressContact: PropTypes.shape({
			address: PropTypes.string,
			email: PropTypes.string,
			phone: PropTypes.string,
			instagram: PropTypes.string,
		}),
	}),
}

About.defaultProps = {
	data: {
		name: 'NGUYỄN HOÀNG THIÊN KHẢI',
		age: '22',
		experience: '7 tháng',
		addressContact: {
			address: 'Phạm hùng, Phường 9, Quận 8, TP.HCM',
			email: 'khai.nguyen@saigonmio.com',
			phone: '3078527288',
			instagram: 'instagram.com',
		},
	},
}
