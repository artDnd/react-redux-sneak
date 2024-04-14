import { FaAngleDoubleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import style from './BackButton.module.css'
export function BackButton() {
	return (
		<Link to={'/'}>
			<button className={style.back_btn}>
				<span>
					<FaAngleDoubleLeft />
				</span>
				Вернутсья назад
			</button>
		</Link>
	)
}
