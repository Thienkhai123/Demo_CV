import { useContext } from 'react'
import { StoreContext } from '../../Store'

export const useStore = () => {
	const [state, dispatch] = useContext(StoreContext)
	return [state, dispatch]
}
