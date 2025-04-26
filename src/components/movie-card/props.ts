export interface IMovieCardProps {	
	title: string;
	poster: string;
	rating: number;
	isFavorite: boolean;
	onClick: () => void;
}
