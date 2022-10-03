import React from 'react'

const ContactAdress = (props) => {
	const {
		location = 'San Francisco, CA',
		gmail = 'hello@tom.com',
		phone = '+ (00) 123 456 789',
	} = props
	return (
		<div className='footer-right-contact'>
			<div className='single-contact'>
				<div className='contact-icon'>
					<i className='fa fa-map-marker'></i>
				</div>
				<p>{location}</p>
			</div>
			<div className='single-contact'>
				<div className='contact-icon'>
					<i className='fa fa-envelope'></i>
				</div>
				<p>
					<a href='mailto:hello@tom.com'>{gmail}</a>
				</p>
			</div>
			<div className='single-contact'>
				<div className='contact-icon'>
					<i className='fa fa-phone'></i>
				</div>
				<p>
					<a href='#'>{phone}</a>
				</p>
			</div>
		</div>
	)
}

export default ContactAdress
