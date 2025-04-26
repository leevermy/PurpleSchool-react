import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthForm from './components/auth-form';
import Layout from './layout'
import { UserContextProvider } from './context/user.context';
import MoviesPage from './pages/movies-page';
import { movies } from './temporaryData';
import AuthPage from './pages/auth-page';
import MoviePage from './pages/movie-page';
import NotFoundPage from './pages/not-found-page';
import UserPage from './pages/user-page';
import FavoriteMoviesPage from './pages/favourite-movies-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <AuthForm/>,
      },
      {
        path: '/auth',
        element: <AuthPage/>,
      },
      {
        path: '/movies',
        element: <MoviesPage movies={movies}/>,
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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>,
)
