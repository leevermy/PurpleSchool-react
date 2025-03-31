import Logo from '../../assets/logo.svg';

const navItems = [
	{
		label: 'Поиск фильмов',
		icon: '',
		link: '',
	},
	{
		label: 'Мои фильмы',
		icon: '',
		link: '',
	},
	{
		label: 'Найти',
		icon: '',
		link: '',
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
						<div key={index} className='px-4 py-3'>
							<a href={item.link} className='text-gray-100 hover:text-white transition duration-300'>{item.label}</a>
							{item.icon && <img src={item.icon} alt={item.label} />}
						</div>
					))}
				</nav>
			</div>
		</header>
	)
}

export default Header;