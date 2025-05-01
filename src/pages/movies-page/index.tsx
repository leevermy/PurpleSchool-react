import { useLoaderData } from 'react-router-dom';
import MovieCard from '../../components/movie-card';
import Search from '../../components/search';
import { IMovie } from './interface';

const MoviesLayout: React.FC= () => {
	const movies = useLoaderData() as IMovie[];



	return (
		<>
			<div className='mb-10'>
				<Search/>
			</div>
			<div className='grid grid-cols-4 gap-4'>
				{movies.length > 1 && movies.map((movie) => (
				<MovieCard 
					key={movie['#IMDB_ID']} 
					isFavorite={false}
					title={movie['#TITLE']} 
					poster={movie['#IMG_POSTER']} 
					rating={movie['#RANK']}
					linkToMovie={movie['#IMDB_ID']}
					onClick={() => alert('Added to favorite')}/>
				))}
			</div>
		</>
	)
}

export default MoviesLayout;