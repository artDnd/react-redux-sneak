import { BsCart2 } from 'react-icons/bs'
import { MdFavoriteBorder } from 'react-icons/md'
import { TbShoppingBagPlus } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setIsOpenDrawer } from '../../store/slices/drawerSlice'
import style from './Header.module.css'
export function Header() {
	const dispatch = useDispatch()
	const handleOpenDrawer = () => {
		dispatch(setIsOpenDrawer())
	}
	return (
		<header className={style.header}>
			<Link to={'/'} className={style.header_title}>
				<img src='./assets/logo.png' alt='' />
				<span>
					<h2>REACT SNEAKERS</h2>
					<p>Магазин лучших кроссовок</p>
				</span>
			</Link>
			<ul className={style.header_info}>
				<li onClick={handleOpenDrawer}>
					<span>
						<BsCart2 />
					</span>
					Корзина
				</li>
				<li>
					<Link to={'/favorite'}>
						<span>
							<MdFavoriteBorder />
						</span>
						Избранные
					</Link>
				</li>
				<li>
					<Link to={'/orders'}>
						<span>
							<TbShoppingBagPlus />
						</span>
						Мои покупки
					</Link>
				</li>
			</ul>
		</header>
	)
}
