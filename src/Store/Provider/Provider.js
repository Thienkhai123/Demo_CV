import React, { useReducer } from 'react'
import Context from '../Context/Context'
import reducer, { initSate } from '../Reducer/Reducer'

const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initSate)

	return (
		<Context.Provider value={[state, dispatch]}>
			{children}
		</Context.Provider>
	)
}

export default Provider
