import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

type filterState = {
	title: string
}
const initialState: filterState = {
	title: '',
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setTitleFilter: (state, action) => {
			return { ...state, title: action.payload }
		},
	},
})
export const selectTitleFilter = (state: RootState) => state.filter.title

export const { setTitleFilter } = filterSlice.actions
export default filterSlice.reducer
