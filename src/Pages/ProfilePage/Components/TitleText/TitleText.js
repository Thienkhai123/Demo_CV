import React from 'react'

const TitleText = (props) => {
	const { title = '' } = props
	return <h3>{title}</h3>
}

export default TitleText
