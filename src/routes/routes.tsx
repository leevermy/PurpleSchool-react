import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout';
import AuthPage from '../pages/auth-page';
import MoviesPage from '../pages/movies-page';
import MoviePage from '../pages/movie-page';
import FavoriteMoviesPage from '../pages/favourite-movies-page';
import NotFoundPage from '../pages/not-found-page';
import UserPage from '../pages/user-page';
import { moviesLoader, movieLoader } from './loaders';
import RequireAuth from '../helpers/require-auth';


export const router = createBrowserRouter([
	{
		path: '/auth',
		element: <Layout/>,
		children: [{
			path: '/auth',
			element: <AuthPage/>,
		}]
	},
	{
	  path: '/',
	  element: <RequireAuth><Layout/></RequireAuth>,
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