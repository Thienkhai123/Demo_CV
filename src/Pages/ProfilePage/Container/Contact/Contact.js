import React from 'react'
import ContactAdress from './Components/ContactAddress/ContactAdress'
import ContactForm from './Components/ContactFrom/ContactForm'
import Map from './Components/Map/Map'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import {
	selectAddressContact,
	sendEmail,
} from '../../../../Store/ProfileSlice/profileSlice'
import { useTranslation } from 'react-i18next'

const Contact = (props) => {
	const { t } = useTranslation('translation', { keyPrefix: 'contact' })
	const { onSubmit } = props
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
									<h2>{t('contactMail')}</h2>
									<ContactForm onSubmit={onSubmit} />
								</div>
							</div>
							<div className='col-md-6 col-lg-6 col-sm-12'>
								<div className='footer-right-area wow fadeIn'>
									<h2>{t('contactAddress')}</h2>
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
