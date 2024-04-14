import ContentLoader from 'react-content-loader'
import style from './SkeletonLoader.module.css'
export const Skeleton = () => (
	<ContentLoader
		speed={2}
		width={250}
		height={250}
		viewBox='0 0 250 250'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		className={style.skeleton}
	>
		<rect x='92' y='323' rx='0' ry='0' width='2' height='0' />
		<circle cx='61' cy='61' r='61' />
		<rect x='0' y='127' rx='7' ry='7' width='125' height='34' />
		<rect x='0' y='168' rx='0' ry='0' width='74' height='13' />
		<rect x='0' y='187' rx='0' ry='0' width='74' height='13' />
		<rect x='93' y='170' rx='0' ry='0' width='32' height='29' />
	</ContentLoader>
)
