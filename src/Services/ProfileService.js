import { DataProfile } from '../Json/DataProfile.js'

const ProfileService = () => {
	try {
		const respones = DataProfile
		return respones
	} catch (error) {
		alert('lỗi Service')
	}
}

export { ProfileService }
