import { FC } from 'react'

import { movies } from '../../temporaryData'
import MoviesPage from '../movies-page'

const FavoriteMoviesPage:FC = () => {
  return (
	<>
		<h1 className='text-gray-100 font-bold text-3xl'>Страница избранных фильмов, но пока тут тот же список, что и на странице фильмов</h1>
		<MoviesPage movies={movies}/>
    </>
  )
}

export default FavoriteMoviesPage