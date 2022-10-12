import React from 'react'
import ContactAdress from './Components/ContactAddress/ContactAdress'
import ContactForm from './Components/ContactFrom/ContactForm'
import Map from './Components/Map/Map'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { selectAddressContact } from '../../../../Store/ProfileSlice/profileSlice'
const Contact = (props) => {
	const addressContact = useSelector(selectAddressContact)
	const { address, email, phone } = addressContact
	return (
		<div>
			<section id='contact' className='section-padding'>
				<div className='contact-form'>
					<div className='container'>
						<div
							className='row contact-form-area wow fadeInUp'
							data-wow-delay='0.4s'>
							<div className='col-md-6 col-lg-6 col-sm-12'>
								<div className='contact-block'>
									<h2>Liên hệ</h2>
									<ContactForm />
								</div>
							</div>
							<div className='col-md-6 col-lg-6 col-sm-12'>
								<div className='footer-right-area wow fadeIn'>
									<h2>Địa chỉ liên hệ</h2>
									<ContactAdress
										location={address}
										gmail={email}
										phone={phone}
									/>
								</div>
							</div>
							<div className='col-md-12'>
								<Map />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Contact
Contact.propTypes = {
	addressContact: PropTypes.shape({
		address: PropTypes.string,
		email: PropTypes.string,
		phone: PropTypes.string,
	}),
}

Contact.defaultProps = {
	addressContact: {
		address: 'Phạm hùng, Phường 9, Quận 8, TP.HCM',
		email: 'khai.nguyen@saigonmio.com',
		phone: '3078527288',
	},
}
