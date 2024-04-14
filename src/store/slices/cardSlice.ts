import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import axios from 'axios'
import { CardState, CardType } from '../../types/index'
import { RootState } from '../store'

const initialState: CardState = {
	cards: [],
	isLoading: false,
}

export const fetchCards = createAsyncThunk(
	'card/fetchCard',
	async (url: string) => {
		const res = await axios.get<CardType[]>(url)
		return res.data
	}
)

export const CardSlice = createSlice({
	name: 'card',
	initialState,
	reducers: {
		toggleCard: (state, action) => {
			state.cards = current(state.cards).map(card => {
				if (card.id !== action.payload) return card

				return { ...card, isAdded: !card.isAdded }
			})
		},
		toggleFavorite: (state, action) => {
			state.cards = current(state.cards).map(card => {
				if (card.id !== action.payload) return card

				return { ...card, isFavorite: !card.isFavorite }
			})
		},
	},
	extraReducers: bulder => {
		bulder.addCase(fetchCards.fulfilled, (state, action) => {
			const data = action.payload

			if (data) {
				state.cards = data
				state.isLoading = true
			}
		})
	},
})

export const selectCards = (state: RootState) => state.cards
export const selectIsLoading = (state: RootState) => state.cards.isLoading

export const selectCardsInCart = (state: RootState) =>
	state.cards.cards.filter(card => card.isAdded)
export const selectFavoriteCard = (state: RootState) =>
	state.cards.cards.filter(card => card.isFavorite)

export const { toggleCard, toggleFavorite } = CardSlice.actions
export default CardSlice.reducer
