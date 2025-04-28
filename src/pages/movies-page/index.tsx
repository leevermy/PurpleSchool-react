import MovieCard from '../../components/movie-card';
import Search from '../../components/search';
import { IMovie } from './interface';

const MoviesLayout: React.FC<{movies: IMovie[]}> = ({movies}) => {
	return (
		<>
			<div className='mb-10'>
				<Search/>
			</div>
			<div className='grid grid-cols-4 gap-4'>
				{movies.map((movie) => (
				<MovieCard 
					key={movie.id} 
					isFavorite={movie.isFavorite}
					title={movie.title} 
					poster={movie.poster} 
					rating={movie.rating} 
					onClick={() => alert('Added to favorite')}/>
				))}
			</div>
		</>
	)
}

export default MoviesLayout;