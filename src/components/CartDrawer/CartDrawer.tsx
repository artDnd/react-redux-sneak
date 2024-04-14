import { ReactNode } from 'react'
import { FaAngleDoubleLeft } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { selectCardsInCart, toggleCard } from '../../store/slices/cardSlice'
import { setIsCloseDrawer } from '../../store/slices/drawerSlice'
import { CardType } from '../../types'
import style from './CartDrawer.module.css'

export function CartDrawer() {
	const dispatch = useDispatch()
	const cardInCart = useSelector(selectCardsInCart)
	const handleCloseDrawer = () => dispatch(setIsCloseDrawer())

	const renderCardsItCart = (cardInCart: CardType[]): ReactNode => {
		return (
			<>
				{cardInCart.map(card => {
					return (
						<div className={style.card_item_elem} key={card.id}>
							<img src={card.url} alt={card.title} />
							<span>
								{card.title}
								<b>{card.price} rub.</b>
							</span>
							<button
								className={style.card_item_elem__btn}
								onClick={() => dispatch(toggleCard(card.id))}
							>
								X
							</button>
						</div>
					)
				})}
			</>
		)
	}
	const priceMeeting = (cardInCart: CardType[]) => {
		let currentValue: number = 0
		cardInCart.forEach(card => {
			const price = card.price
			return (currentValue += price)
		})
		return currentValue
	}
	const priceDiscount = (price: number) => {
		const result = price * (5 / 100)
		return result.toFixed(0)
	}

	const cartVoid = () => {
		return (
			<div className={style.card__item_void}>
				<span>Корзина пустая!</span>
				<img src='./drawer/cart-void.png' />
				<p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
				<button onClick={handleCloseDrawer}>
					<span>
						<FaAngleDoubleLeft />
					</span>
					Вернутсья назад
				</button>
			</div>
		)
	}
	return (
		<div className={style.cart}>
			<div className={style.cart_overlay}>
				<span className={style.cart_title}>
					<h2>Корзина</h2>
					<button onClick={handleCloseDrawer}>X</button>
				</span>
				<div className={style.cart_item}>
					{cardInCart.length ? renderCardsItCart(cardInCart) : cartVoid()}
				</div>
				<div className={style.cart_info}>
					<div className={style.cart_info__num}>
						Итого <hr className={style.cart_info__dashed} />{' '}
						{priceMeeting(cardInCart)} руб.
					</div>
					<div className={style.cart_info__num}>
						Скидка <hr className={style.cart_info__dashed} />{' '}
						{priceDiscount(priceMeeting(cardInCart))} руб.
					</div>
					<button className={style.cart_btn}>Оформить заказ</button>
				</div>
			</div>
		</div>
	)
}
