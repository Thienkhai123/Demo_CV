import { ProfileService } from '../../Services/ProfileService'
import { CALL_API } from '../Contant/Contant'

const initSate = {
	data: {},
}

const reducer = (state, action) => {
	switch (action.type) {
		case CALL_API:
			const response = ProfileService()
			return { data: response }
		default:
			throw new Error('Thực hiện không thành công!')
	}
}
export { initSate }
export default reducer
