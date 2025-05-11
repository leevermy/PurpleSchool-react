import { Outlet } from 'react-router-dom';
import Header from './Header/header';

const Layout: React.FC = ( ) => {
	return (
		<>
			<Header/>
			<div className='container py-10'>
				<Outlet/>
			</div>
		</>
	)
}

export default Layout;