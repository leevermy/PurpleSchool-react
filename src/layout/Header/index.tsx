import Logo from '../../assets/logo.svg';
import Login from '../../assets/Login.svg';
import Badge from '../../components/Badge/indes';

const navItems = [
	{
		label: 'Поиск фильмов',
		icon: '',
		link: '',
		badge: false
	},
	{
		label: 'Мои фильмы',
		icon: '',
		link: '',
		badge: true
	},
	{
		label: 'Войти',
		icon: Login,
		link: '',
		badge: false
	},
]

const Header: React.FC =() => {
	return (
		<header className='py-4'>
			<div className='container flex justify-between items-center'>
				<div>
					<a href=""><img src={Logo} alt="Logo" /></a>
				</div>
				<nav className='flex gap-4'>
					{navItems.map((item, index) => (
						<div key={index} className='flex gap-2 px-4 py-3'>
							<a href={item.link} className='text-gray-300 hover:text-white transition duration-300'>{item.label}</a>
							{item.icon && <img src={item.icon} alt={item.label} />}
							{item.badge === true && <Badge quantity={0}/>}
						</div>
					))}
				</nav>
			</div>
		</header>
	)
}

export default Header;