import { FC } from 'react'
import { useLoaderData } from 'react-router-dom';

const MoviePage: FC = () => {
  const movie = useLoaderData();
  return (
	  <>
	    <h1 className='text-gray-100 font-bold text-3xl'>{movie.name}</h1>
    </>
  )
}

export default MoviePage;