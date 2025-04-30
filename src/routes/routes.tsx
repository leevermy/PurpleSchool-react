
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout';
import AuthPage from '../pages/auth-page';
import MoviesPage from '../pages/movies-page';
import MoviePage from '../pages/movie-page';
import FavoriteMoviesPage from '../pages/favourite-movies-page';
import NotFoundPage from '../pages/not-found-page';
import UserPage from '../pages/user-page';


export const router = createBrowserRouter([
	{
	  path: '/',
	  element: <Layout/>,
	  children: [
		{
			path: '/',
			element: <MoviesPage />,
		},
		{
		  path: '/auth',
		  element: <AuthPage/>,
		},
		
		{
		  path: '/movies/:id',
		  element: <MoviePage/>,
		},
		{
		  path: '/favourites',
		  element: <FavoriteMoviesPage/>,
		},
		{
		  path: '*',
		  element: <NotFoundPage/>,
		},
		{
		  path: '/user-page',
		  element: <UserPage/>,
		}
	  ]
	}
  ])