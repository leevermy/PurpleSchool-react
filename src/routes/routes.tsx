
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout';
import AuthPage from '../pages/auth-page';
import MoviesPage from '../pages/movies-page';
import MoviePage from '../pages/movie-page';
import FavoriteMoviesPage from '../pages/favourite-movies-page';
import NotFoundPage from '../pages/not-found-page';
import UserPage from '../pages/user-page';
import { moviesLoader, movieLoader } from './loaders';

export const router = createBrowserRouter([
	{
	  path: '/',
	  element: <Layout/>,
	  children: [
		{
			path: '/',
			element: <MoviesPage />,
			loader: moviesLoader,
		},
		{
		  path: '/auth',
		  element: <AuthPage/>,
		},
		
		{
		  path: '/movie',
		  element: <MoviePage/>,
		  loader: movieLoader,
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