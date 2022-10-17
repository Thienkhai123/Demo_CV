import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit'
import { ProfileService } from '../../Services/ProfileService'
import { TYPES } from '../type'
import { toast } from 'react-toastify'
const initialState = {
	profile: {},
}

export const getProfile = createAsyncThunk(
	TYPES.PROFILE.DETAIL,
	async (params, { rejectWithValue }) => {
		try {
			const response = await ProfileService()
			return response
		} catch (error) {
			return rejectWithValue(error.response)
		}
	},
)

export const sendEmail = createAsyncThunk(
	TYPES.PROFILE.SEND_EMAIL,
	(payload, { rejectWithValue }) => {
		try {
			const response = payload
			return response
		} catch (error) {
			toast.error('Server gặp vấn đề!', {
				toastId: 'get-quest-unauth',
				position: 'top-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			})
			return rejectWithValue(error.response)
		}
	},
)

const profile = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		clearProfile: (state) => {
			return {}
		},
	},
	extraReducers: {
		[getProfile.pending]: (state, action) => {
			return {
				...state,
				loading: true,
			}
		},
		[getProfile.fulfilled]: (state, action) => {
			return {
				...state,
				profile: action.payload,
				loading: false,
			}
		},
		[getProfile.rejected]: (state, action) => {
			return {
				...state,
				loading: false,
			}
		},
		[getProfile.rejected]: (state) => {
			return state
		},
		[sendEmail.fulfilled]: (state, action) => {
			return {
				...state,
				send: action.payload,
			}
		},
		[sendEmail.rejected]: (state, action) => {
			return state
		},
	},
})

const selectorUserProfile = (state) => state.data.profile

export const selectWorkExperience = createSelector(
	selectorUserProfile,
	(state) => {
		return state.workExperience || []
	},
)

export const selectSkill = createSelector(selectorUserProfile, (state) => {
	return state.skill || []
})

export const selectAddressContact = createSelector(
	selectorUserProfile,
	(state) => {
		return state.addressContact || []
	},
)

export const selectHome = createSelector(selectorUserProfile, (state) => {
	const homeData = {
		name: state.name,
		field: state.field,
	}
	return homeData
})

export const selectAbout = createSelector(selectorUserProfile, (state) => {
	const aboutData = {
		avatar: state.avatar,
		information: state.information,
		name: state.name,
		age: state.age,
		experience: state.experience,
		country: state.country,
		addressContact: state.addressContact,
	}
	return aboutData
})

export const selectResume = createSelector(selectorUserProfile, (state) => {
	const resumeData = {
		education: state.education,
		experiences: state.experiences,
	}
	return resumeData
})

export const { clearProfile } = profile.actions

export default profile.reducer
