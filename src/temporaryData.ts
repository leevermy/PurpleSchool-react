import LogInIcon from './assets/Login.svg';
import AuthIcon from './assets/User Rounded.svg'

export interface IMovie {
	id: number;
	title: string;
	poster: string;
	rating: number;
	isFavorite: boolean;
}

export const movies: IMovie[] = [];
for (let i = 0; i < 12; i++) {
  movies.push(	{
	id: i,
	isFavorite: i % 2 ? false : true,
	title: 'The Shawshank Redemption',
	poster: 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
	rating: 234
  });
}

const publicNav = [
	{ label: 'Поиск фильмов', link: '/movies' },
	{ label: 'Войти', icon: LogInIcon, link: '/auth', badge: false },
  ];
  
const privateNav = (username: string, logOut: (username: string) => void) => [
	{ label: 'Поиск фильмов', link: '/movies' },
	{ label: 'Мои фильмы', link: '/favourites', badge: true },
	{ label: username, icon: AuthIcon, link: '/user-page', badge: false },
	{ label: 'Выйти', link: '', badge: false, onClick: () => logOut(username) },
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
		name:"Василий", 
		isLoggedIn:false,
	}
]