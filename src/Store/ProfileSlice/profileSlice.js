import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ProfileService } from '../../Services/ProfileService'

const initialState = {
	profile: {},
}

export const getProfile = createAsyncThunk('profile', async () => {
	try {
		const response = ProfileService()
		return response
	} catch (error) {
		alert('Server gặp vấn đề!')
	}
})

const profile = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
	extraReducers: {
		[getProfile.fulfilled]: (state, action) => {
			return {
				...state,
				profile: action.payload,
			}
		},
	},
})

export const selectHome = (state) => {
	//CONFIG LAI DATA TRA VE
	const data = state.data.profile
	const homeData = {
		name: data.name,
		field: data.field,
	}
	return homeData
}
export const selectAbout = (state) => {
	//CONFIG LAI DATA TRA VE
	const data = state.data.profile
	const aboutData = {
		avatar: data.avatar,
		information: data.information,
		name: data.name,
		age: data.age,
		experience: data.experience,
		country: data.country,
		addressContact: data.addressContact,
	}
	return aboutData
}
export const selectResume = (state) => {
	//CONFIG LAI DATA TRA VE
	const data = state.data.profile
	const resumeData = {
		education: data.education,
		experiences: data.experiences,
	}
	return resumeData
}

export const selectWorkExperience = (state) => {
	return state.data.profile.workExperience || []
}
export const selectSkiill = (state) => {
	return state.data.profile.Skiill || []
}
export const selectAddressContact = (state) => {
	return state.data.profile.addressContact || {}
}

export default profile.reducer
