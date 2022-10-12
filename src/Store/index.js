import { configureStore } from '@reduxjs/toolkit'
import profile from './ProfileSlice/profileSlice'
const middlewares = []
const store = configureStore({
	reducer: {
		data: profile,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: false,
		}).concat(middlewares),
})

export default store
