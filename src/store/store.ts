import { configureStore } from '@reduxjs/toolkit'
import CardSlice from './slices/cardSlice'
import drawerSlice from './slices/drawerSlice'
import filterSlice from './slices/filterSlice'

const store = configureStore({
	reducer: {
		cards: CardSlice,
		filter: filterSlice,
		drawer: drawerSlice,
	},
})
export type RootState = ReturnType<typeof store.getState>

export default store
