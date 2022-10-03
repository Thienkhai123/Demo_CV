import React from 'react'

const DescriptionText = (props) => {
	const { description = '' } = props
	return <p>{description}</p>
}

export default DescriptionText
