import { FC } from 'react';
import Logo from '../../assets/logo.svg';
import { useUserContext } from '../../hooks';
import { getNavItems } from '../../temporaryData';
import { IHeader } from './props';
import { Link, NavLink } from 'react-router-dom';
import Badge from '../../components/badge';
import cn from 'clsx'

const Header:FC = () => {
	const { dataFromStorage, setDataFromStorage, userName, setUserName } = useUserContext();

	const handleLogOut = (name: string) => {
		const accountIndex = dataFromStorage.findIndex(el => el.name === name);
		const updated = [...dataFromStorage];
		updated[accountIndex] = {
			...updated[accountIndex],
			isLoggedIn: false,
		}
		setDataFromStorage(updated);
		setUserName('');
	}

	const navItems: IHeader[] = getNavItems(userName, handleLogOut);
  return (
	<header className='py-4'>
		<div className='container flex justify-between items-center'>
			<div>
				<Link to="/"><img src={Logo} alt="Logo" /></Link>
			</div>
			<nav className='flex gap-4'>
				{navItems.map((item) => (
					<div key={item.label} onClick={item.onClick ? item.onClick : undefined} className='flex gap-2 px-4 py-3'>
						<NavLink to={item.link || '#'} 
						className={({isActive}) => cn('text-gray-300 hover:text-white transition duration-300', {
							'text-violet-400': isActive
						})}>{item.label}</NavLink>
						{item.icon && <img src={item.icon} alt={item.label} />}
						{item.badge === true && <Badge quantity={22}/>}
					</div>
				))}
			</nav>
		</div>
	</header>
  )
}

export default Header