import { UnknownAction } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_URL } from '../../API'
import {
	fetchCards,
	selectCards,
	selectIsLoading,
} from '../../store/slices/cardSlice'
import { selectTitleFilter } from '../../store/slices/filterSlice'
import { Skeleton } from '../Skeleton/SkeletonLoader'
import { Card } from './Card/Card'
import style from './CardBlock.module.css'
import { CardSearch } from './CardSearch/CardSearch'

export function CardBlock() {
	const dispatch = useDispatch()
	const { cards } = useSelector(selectCards)
	const cardTitle = useSelector(selectTitleFilter)
	const isLoading = useSelector(selectIsLoading)

	useEffect(() => {
		dispatch(fetchCards(API_URL) as unknown as UnknownAction)
	}, [])

	const cardElement = cards
		.filter(card => card.title.toLowerCase().includes(cardTitle.toLowerCase()))
		.map(card => <Card key={card.id} card={card} />)

	const renderSkeleton = (arrayNumber: number[]) => {
		return arrayNumber.map(numValue => {
			console.log(numValue)
			return <Skeleton />
		})
	}
	const arrSkeleton = [1, 2, 3, 4, 5, 6]
	return (
		<div className={style.cardBlock}>
			<CardSearch />
			<div>{isLoading ? cardElement : renderSkeleton(arrSkeleton)}</div>
		</div>
	)
}
