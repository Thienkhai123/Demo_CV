import React from 'react'
import '../Profile.css'

const HederProfile = (props) => {
	const { hdbProfile } = props
	return (
		<div
			style={{
				height: '60vh',
				position: 'relative',
				color: 'white',
			}}>
			<div
				style={{
					height: '60vh',
					backgroundImage:
						"url('https://hanoispiritofplace.com/wp-content/uploads/2017/12/hinh-anh-cuon-sach-dep-4.jpg')",
				}}></div>
			<div
				className='row'
				style={{
					top: '3rem',
					position: 'absolute',
					textAlign: 'center',
				}}>
				<div className='col-5 imgAvatar' style={{ marginTop: '3rem' }}>
					<img src={hdbProfile.avatar} alt={hdbProfile.avatar} />
				</div>
				<div className='col-7'>
					<h3 className='textConver'>{hdbProfile.name}</h3>
					<h5 className='textConver'>{hdbProfile.nominee}</h5>
					<h5 className='textConver'>Giới thiệu</h5>
					<p className='textConver' style={{ textAlign: 'justify' }}>
						{hdbProfile.information}
					</p>
				</div>
			</div>
		</div>
	)
}

export default HederProfile
