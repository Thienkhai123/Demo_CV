import React from 'react'

const ContactForm = () => {
	return (
		<form id='contactForm'>
			<div className='row'>
				<div className='col-md-6'>
					<div className='form-group'>
						<input
							type='text'
							className='form-control'
							id='name'
							name='name'
							placeholder='Name'
							required
							data-error='Please enter your name'
						/>
						<div className='help-block with-errors'></div>
					</div>
				</div>
				<div className='col-md-6'>
					<div className='form-group'>
						<input
							type='text'
							placeholder='Email'
							id='email'
							className='form-control'
							name='email'
							required
							data-error='Please enter your email'
						/>
						<div className='help-block with-errors'></div>
					</div>
				</div>
				<div className='col-md-12'>
					<div className='form-group'>
						<input
							type='text'
							placeholder='Subject'
							id='msg_subject'
							className='form-control'
							required
							data-error='Please enter your subject'
						/>
						<div className='help-block with-errors'></div>
					</div>
				</div>
				<div className='col-md-12'>
					<div className='form-group'>
						<textarea
							className='form-control'
							id='message'
							placeholder='Your Message'
							rows='5'
							data-error='Write your message'
							required></textarea>
						<div className='help-block with-errors'></div>
					</div>
					<div className='submit-button'>
						<button
							className='btn btn-common'
							id='submit'
							type='submit'>
							Gửi
						</button>
						<div
							id='msgSubmit'
							className='h3 text-center hidden'></div>
						<div className='clearfix'></div>
					</div>
				</div>
			</div>
		</form>
	)
}

export default ContactForm
