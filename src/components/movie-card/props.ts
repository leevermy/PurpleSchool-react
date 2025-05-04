export interface IMovieCardProps {	
	title: string;
	poster: string;
	rating: number;
	linkToMovie: string;
	isFavorite: boolean;
	onClick: () => void;
}
