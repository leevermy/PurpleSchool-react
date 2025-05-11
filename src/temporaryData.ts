import LogInIcon from './assets/Login.svg';
import AuthIcon from './assets/User Rounded.svg'


const publicNav = [
	{ label: 'Войти', icon: LogInIcon, link: '/auth', badge: false },
  ];
  
const privateNav = (username: string, logOut: (username: string) => void) => [
	{ label: 'Поиск фильмов', link: '/' },
	{ label: 'Мои фильмы', link: '/favourites', badge: true },
	{ label: username, icon: AuthIcon, link: '/user-page', badge: false },
	{ label: 'Выйти', link: '/auth', badge: false, onClick: () => logOut(username) },
  ];

export const getNavItems = (username: string | undefined, logOut: (userName: string) => void) => {
	return username
	  ? privateNav(username, logOut)
	  : publicNav;
  };


  export const usersStorage = [
	{
		name:"Алексей", 
		isLoggedIn:false,
	},
	{
		name:"Евгений", 
		isLoggedIn:false,
	}
]