import { createSlice } from '@reduxjs/toolkit'
import { TYPES } from '../type'
import { getProfile } from '../ProfileSlice/profileSlice'

const buildLoading = (action, context) => {
	return {
		[action.pending]: (state) => {
			return { ...state, ...{ [context]: true } }
		},
		[action.fulfilled]: (state) => {
			return { ...state, ...{ [context]: false } }
		},
		[action.rejected]: (state) => {
			return { ...state, ...{ [context]: false } }
		},
	}
}

const ui = createSlice({
	name: 'ui',
	initialState: {},
	reducers: {},
	extraReducers: {
		...buildLoading(getProfile, TYPES.PROFILE.DETAIL),
	},
})

export const selectLoading = (state, Context) => {
	if (state !== undefined) {
		return state.ui[[Context]] || false
	}
}
export default ui.reducer
