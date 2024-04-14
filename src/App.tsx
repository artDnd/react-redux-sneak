import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { CartDrawer } from './components/CartDrawer/CartDrawer'
import { Favorite } from './pages/Favorite/Favorite'
import { Home } from './pages/Home/Home'
import { Orders } from './pages/Orders/Orders'
import { selectIsOpenDrawer } from './store/slices/drawerSlice'

function App() {
	const stateDrawer = useSelector(selectIsOpenDrawer)

	return (
		<div className='container'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/favorite' element={<Favorite />} />
				<Route path='/orders' element={<Orders />} />
			</Routes>
			{stateDrawer && <CartDrawer />}
		</div>
	)
}

export default App
