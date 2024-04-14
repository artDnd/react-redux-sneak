import clsx from 'clsx'

import { GrFavorite } from 'react-icons/gr'

import { useDispatch } from 'react-redux'
import { toggleCard, toggleFavorite } from '../../../store/slices/cardSlice'
import { CardType } from '../../../types/index'
import style from './Card.module.css'

interface CardProps {
	card: CardType
}
export function Card({ card }: CardProps) {
	const dispatch = useDispatch()

	return (
		<div className={style.card}>
			<img src={card.url} />
			<button
				className={clsx(
					card.isFavorite
						? `${style.card_btn} ${style.added}`
						: `${style.card_btn}`
				)}
				onClick={() => dispatch(toggleFavorite(card.id))}
			>
				<GrFavorite />
			</button>
			<div className={style.card_title}>{card.title}</div>
			<div className={style.card_price}>
				<span>
					PRICE
					<p>{card.price} rub.</p>
				</span>
				<button
					className={clsx(
						card.isAdded
							? `${style.card_price__btn} ${style.added}`
							: `${style.card_price__btn}`
					)}
					onClick={() => dispatch(toggleCard(card.id))}
				>
					+
				</button>
			</div>
		</div>
	)
}
