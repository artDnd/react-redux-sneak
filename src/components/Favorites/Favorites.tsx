import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { selectFavoriteCard } from '../../store/slices/cardSlice'
import { CardType } from '../../types'
import { BackButton } from '../Buttons/BackButton'
import { Card } from '../CardBlock/Card/Card'
import style from './Favorites.module.css'

export function Favorites() {
	const favoritesElement = useSelector(selectFavoriteCard)

	const renderCardElements = (favoritesElement: CardType[]): ReactNode => {
		return (
			<>
				{favoritesElement.map(card => {
					return <Card key={card.id} card={card} />
				})}
			</>
		)
	}

	const renderVoidFavorites = () => {
		return (
			<div className={style.favorites_void}>
				<img src='./favorites/favorites-void.png' />
				<p>Список избранных пуст!</p>
				<span>Вы ничего не добавляли в закладки</span>
				<BackButton />
			</div>
		)
	}
	return (
		<div className={style.favorites}>
			{favoritesElement.length
				? renderCardElements(favoritesElement)
				: renderVoidFavorites()}
		</div>
	)
}
