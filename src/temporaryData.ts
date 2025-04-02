import LogInIcon from './assets/Login.svg';
import AuthIcon from './assets/User Rounded.svg'

interface Movie {
	id: number;
	title: string;
	poster: string;
	rating: number;
	isFavorite: boolean;
}

export const movies: Movie[] = [];
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
	{ label: 'Поиск фильмов', link: '' },
	{ label: 'Мои фильмы', link: '', badge: true },
	{ label: 'Войти', icon: LogInIcon, link: '', badge: false },
  ];
  
  const privateNav = (username: string, logOut: () => void) => [
	{ label: 'Поиск фильмов', link: '' },
	{ label: 'Мои фильмы', link: '', badge: true },
	{ label: username, icon: AuthIcon, link: '', badge: false },
	{ label: 'Выйти', link: '', badge: false, onClick: logOut },
  ];

  export const getNavItems = (username: string, logOut: () => void) => {
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