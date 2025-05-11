import { useLoaderData } from 'react-router-dom';
import MovieCard from '../../components/movie-card';
import Search from '../../components/search';
import { IMovie } from './interface';

const MoviesLayout: React.FC= () => {
	const movies = useLoaderData() as IMovie[];
	
	const hasResults = Array.isArray(movies) && movies.length > 0;
	const noResults = Array.isArray(movies) && movies.length === 0;
	

	return (
		<>
			<div className='mb-10'>
				<Search/>
			</div>
			{hasResults && (
				<div className='grid grid-cols-3 lg:grid-cols-4  gap-4'>
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
			)}
			{noResults && (
					<p className='text-xl font-normal text-gray-400'>Фильмов нет, но вы держитесь</p>
			)}
		</>
	)
}

export default MoviesLayout;