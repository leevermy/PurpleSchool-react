import { IMovieCardProps } from './props';
import { Link } from 'react-router-dom';
import Rating from '../../shared/Rating';
import AddToFavoriteButton from '../../shared/AddToFavoriteButton';

const MovieCard: React.FC<IMovieCardProps> = ({ title, poster, rating, linkToMovie, onClick}) => {
	
	return (
		<article className='w-full max-w-[282px] p-2 rounded-xl bg-[#20283ECC]/80'>
			<Link to={`/movie/?tt=${linkToMovie}`}>
			<div className='relative h-[400px] overflow-hidden rounded-lg'>
				<Rating rating={rating} className=' bg-black/65 absolute'/>
				<img className='w-full h-full object-cover' src={poster} alt={title} />
			</div>
			<div className='my-4 p-2 flex flex-col gap-4'>
				<h3 className='text-gray-50 font-semibold text-base/tight tracking-wide'>{title}</h3>
				<AddToFavoriteButton onClick={onClick}/>	
			</div>
			</Link>
		</article>

	);
};
export default MovieCard;