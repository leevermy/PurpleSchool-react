import Logo from '../../assets/logo.svg';
import Badge from '../../components/Badge/index';
import { IHeader } from './props';

const Header: React.FC<{navItems: IHeader[]}> = ( {navItems} ) => {
	return (
		<header className='py-4'>
			<div className='container flex justify-between items-center'>
				<div>
					<a href=""><img src={Logo} alt="Logo" /></a>
				</div>
				<nav className='flex gap-4'>
					{navItems.map((item) => (
						<div key={item.label} onClick={item.onClick ? item.onClick : undefined} className='flex gap-2 px-4 py-3'>
							<a href={item.link || '#'} className='text-gray-300 hover:text-white transition duration-300'>{item.label}</a>
							{item.icon && <img src={item.icon} alt={item.label} />}
							{item.badge === true && <Badge quantity={22}/>}
						</div>
					))}
				</nav>
			</div>
		</header>
	)
}

export default Header;