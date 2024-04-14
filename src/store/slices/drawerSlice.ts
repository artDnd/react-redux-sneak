import { createSlice } from '@reduxjs/toolkit'
import { IsOpenType } from '../../types'
import { RootState } from '../store'

const initialState: IsOpenType = {
	isOpenDrawer: false,
}
const drawerSlice = createSlice({
	name: 'drawer',
	initialState,
	reducers: {
		setIsOpenDrawer: state => {
			state.isOpenDrawer = true
		},
		setIsCloseDrawer: state => {
			state.isOpenDrawer = false
		},
	},
})
export const selectIsOpenDrawer = (state: RootState) =>
	state.drawer.isOpenDrawer

export const { setIsCloseDrawer, setIsOpenDrawer } = drawerSlice.actions
export default drawerSlice.reducer
