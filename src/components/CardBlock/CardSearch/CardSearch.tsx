import { useDispatch, useSelector } from 'react-redux'
import {
	selectTitleFilter,
	setTitleFilter,
} from '../../../store/slices/filterSlice'
import style from './CardSearch.module.css'

export function CardSearch() {
	const dispatch = useDispatch()
	const titleFilter = useSelector(selectTitleFilter)

	const handleTitleFilterChange = (e: string) => {
		dispatch(setTitleFilter(e))
	}
	return (
		<div className={style.search}>
			{titleFilter.length ? (
				<h1>Поиск по запросу: {titleFilter} </h1>
			) : (
				<h1>All sneakers</h1>
			)}
			<input
				value={titleFilter}
				className={style.search_input}
				onChange={e => handleTitleFilterChange(e.target.value)}
				placeholder='Search...'
			/>
		</div>
	)
}
