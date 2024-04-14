export type CardType = {
	title: string
	url: string
	price: number
	id: string
	isAdded: boolean
	isFavorite: boolean
}
export type CardState = {
	cards: CardType[]
	isLoading: boolean
}
export type IsOpenType = {
	isOpenDrawer: boolean
}
export type CartType = {
	cart: CardType[]
}
