import Button from '../Button';
import starIcon from '../../assets/star.svg';
import likeIcon from '../../assets/like.svg';
import likedIcon from '../../assets/liked.svg';

interface IMovieCardProps {	
	title: string;
	poster: string;
	rating: number;
	isFavorite: boolean;
	onClick: () => void;
}
/**
 * 
 * @property {string} title - movie name 
 * @property {string} poster - movie poster (link)
 * @property {number} rating 
 * @property {boolean} isFavorite - is in favorite list
 * @property {() => void} onClick 
 */
const MovieCard: React.FC<IMovieCardProps> = ({ title, poster, rating, isFavorite, onClick}) => {

	const icon = isFavorite ? likedIcon : likeIcon;
	const buttonText = isFavorite ? 'В избранном' : 'В избранное';
	const handleClick = isFavorite ?  () => alert('В избранном'): onClick;


	return (
		<article className='w-full max-w-[282px] p-2 rounded-xl bg-[#20283ECC]/80'>
			<div className='relative h-[400px] overflow-hidden rounded-lg'>
				<div className='inline-flex gap-2 bg-black/65 py-1 px-2 rounded-lg absolute top-2 left-2'>
					<img src={starIcon} alt="rating"/>
					<span className='text-yellow-500'>{rating}</span>
				</div>
				<img className='w-full h-full object-cover' src={poster} alt={title} />
			</div>
			<div className='my-4 p-2 flex flex-col gap-4'>
				<h3 className='text-gray-50 font-semibold text-base/tight tracking-wide'>{title}</h3>
				<Button onClick={handleClick}>
					<img src={icon} alt="Favorite"/>
					<span className='text-violet-400'>{buttonText}</span>
				</Button>	
			</div>
		</article>

	);
};
export default MovieCard;