import React from 'react'
import Content from './Components/Contents/Content'
import IconEduca from './Components/IconEduca/IconEduca'
import PropTypes from 'prop-types'

const Resume = (props) => {
	const { resumeData } = props
	const { education, experiences } = resumeData

	const educationData = {
		icon: <i className='icon-graduation'></i>,
		title: 'HỌC VẤN',
	}

	const experienceData = {
		icon: <i className='icon-briefcase'></i>,
		title: 'KINH NGHIỆM',
	}

	return (
		<div>
			<div id='resume' className='section-padding'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6 col-md-6 col-sm-6'>
							<div
								className='education wow fadeInRight'
								data-wow-delay='0.3s'>
								<ul className='timeline'>
									<IconEduca
										icon={educationData.icon}
										title={educationData.title}
									/>
									{education?.map((item, index) => {
										const {
											schoolName,
											startTime,
											SchoollearnKills,
										} = item
										return (
											<li key={index}>
												<Content
													title={schoolName}
													timedate={startTime}
													description={
														SchoollearnKills
													}
												/>
											</li>
										)
									})}
								</ul>
							</div>
						</div>
						<div className='col-lg-6 col-md-6 col-sm-6'>
							<div
								className='experience wow fadeInRight'
								data-wow-delay='0.6s'>
								<ul className='timeline'>
									<IconEduca
										icon={experienceData.icon}
										title={experienceData.title}
									/>
									{experiences?.map((item, index) => {
										const {
											experiencefield,
											startTime,
											SchoollearnKills,
										} = item
										return (
											<li key={index}>
												<Content
													title={experiencefield}
													timedate={startTime}
													description={
														SchoollearnKills
													}
												/>
											</li>
										)
									})}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Resume

Resume.propTypes = {
	resumeData: PropTypes.shape({
		education: PropTypes.oneOfType([
			PropTypes.shape({
				schoolName: PropTypes.string,
				Schoolfield: PropTypes.string,
				startTime: PropTypes.string,
				endTime: PropTypes.string,
				SchoolthesisTitle: PropTypes.string,
				SchoollearnKills: PropTypes.string,
			}),
		]),
		experiences: PropTypes.oneOfType([
			PropTypes.shape({
				experienceName: PropTypes.string,
				experiencefield: PropTypes.string,
				startTime: PropTypes.string,
				endTime: PropTypes.string,
				SchoollearnKills: PropTypes.string,
			}),
		]),
	}),
}

Resume.defaultProps = {
	resumeData: {
		education: [
			{
				schoolName: 'Đại học tài nguyên và môi trường',
				Schoolfield: 'Công nghệ thông tin',
				startTime: '08-2018',
				endTime: '08-2022',
				SchoolthesisTitle: 'PERFUME BUSINESS WEBSITE',
				SchoollearnKills:
					'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
			},
			{
				schoolName: 'Đại học tài nguyên và môi trường',
				Schoolfield: 'Công nghệ thông tin',
				startTime: '08-2018',
				endTime: '08-2022',
				SchoolthesisTitle: 'PERFUME BUSINESS WEBSITE',
				SchoollearnKills:
					'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
			},
		],
		experiences: [
			{
				experienceName: 'HTP',
				experiencefield: 'FRONT-END WEBSITE DEVELOMENT',
				startTime: '06-2022',
				endTime: '08-2022',
				SchoollearnKills:
					'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
			},
			{
				experienceName: 'IZI',
				experiencefield: 'FRONT-END WEBSITE DEVELOMENT',
				startTime: '08-2022',
				endTime: '9-2022',
				SchoollearnKills:
					'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
			},
		],
	},
}