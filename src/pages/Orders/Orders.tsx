import { BackButton } from '../../components/Buttons/BackButton'
import { Header } from '../../components/Header/Header'
import style from './Orders.module.css'
const renderVoidOrders = () => {
	return (
		<div className={style.orders__void}>
			<img src='./orders/orders-void.png' />
			<h2>У вас нет заказов!</h2>
			<p>Оформите хотя бы один заказ.</p>
			<BackButton />
		</div>
	)
}
export function Orders() {
	return (
		<div>
			<Header />
			{renderVoidOrders()}
		</div>
	)
}
