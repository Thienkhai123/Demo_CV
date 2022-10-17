import React from 'react'
import { toast } from 'react-toastify'

const ButtonBlue = (props) => {
	const { icon = '', title = '' } = props

	const handleSubmitWaring = () => {
		toast.warning('Hệ thống đang cập nhật!', {
			toastId: 'get-quest-unauth',
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		})
	}
	return (
		<button
			// href='#'
			className='btn btn-common'
			onClick={() => handleSubmitWaring()}>
			<i className={icon}></i> {title}
		</button>
	)
}

export default ButtonBlue
