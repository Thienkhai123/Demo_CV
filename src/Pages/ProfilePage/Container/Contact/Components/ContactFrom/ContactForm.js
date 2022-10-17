import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const ContactForm = (props) => {
	const schema = yup.object().shape({
		companyName: yup.string().required('Vui lòng nhập đầy đủ!'),
		name: yup.string().required('Không được bỏ trống!'),
		email: yup
			.string()
			.email('Email không đúng định dạng!')
			.required('Email không được bỏ trống!'),
		subject: yup.string().required('Không được bỏ trống!'),
		message: yup.string().required('Không được bỏ trống!'),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) })

	const { onSubmit } = props

	return (
		<form id='contactForm' onSubmit={handleSubmit(onSubmit)}>
			<div className='row'>
				<div className='col-md-12'>
					<div className='form-group'>
						<input
							type='text'
							className={`${
								errors?.companyName ? 'border-danger' : ''
							} form-control`}
							id='name'
							name='name'
							placeholder='Company Name'
							required
							data-error='Please enter your name'
							{...register('companyName')}
						/>
						<span className='form-text text-danger'>
							{errors?.companyName?.message}
						</span>
						<div className='help-block with-errors'></div>
					</div>
				</div>
				<div className='col-md-6'>
					<div className='form-group'>
						<input
							type='text'
							className={`${
								errors?.name ? 'border-danger' : ''
							} form-control`}
							id='name'
							name='name'
							placeholder='name'
							required
							data-error='Please enter your name'
							{...register('name')}
						/>
						<span className='form-text text-danger'>
							{errors?.name?.message}
						</span>
						<div className='help-block with-errors'></div>
					</div>
				</div>
				<div className='col-md-6'>
					<div className='form-group'>
						<input
							type='text'
							placeholder='Email'
							id='email'
							className={`${
								errors?.email ? 'border-danger' : ''
							} form-control`}
							name='email'
							required
							data-error='Please enter your email'
							{...register('email')}
						/>
						<span className='form-text text-danger'>
							{errors?.email?.message}
						</span>
						<div className='help-block with-errors'></div>
					</div>
				</div>
				<div className='col-md-12'>
					<div className='form-group'>
						<input
							type='text'
							placeholder='Subject'
							id='msg_subject'
							className={`${
								errors?.subject ? 'border-danger' : ''
							} form-control`}
							required
							data-error='Please enter your subject'
							{...register('subject')}
						/>
						<span className='form-text text-danger'>
							{errors?.subject?.message}
						</span>
						<div className='help-block with-errors'></div>
					</div>
				</div>
				<div className='col-md-12'>
					<div className='form-group'>
						<textarea
							className={`${
								errors?.message ? 'border-danger' : ''
							} form-control`}
							id='message'
							placeholder='Your Message'
							rows='5'
							data-error='Write your message'
							required
							{...register('message')}
						/>
						<span className='form-text text-danger'>
							{errors?.message?.message}
						</span>
						<div className='help-block with-errors'></div>
					</div>
					<div className='submit-button'>
						<button
							className='btn btn-common'
							id='submit'
							type='submit'>
							Gửi
						</button>
					</div>
				</div>
			</div>
		</form>
	)
}

export default ContactForm
