interface Movie {
	title: string;
	poster: string;
	rating: number;
}


const movies: Movie[] = [];
for (let i = 0; i < 12; i++) {
  movies.push(	{
	title: 'The Shawshank Redemption',
	poster: 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
	rating: 234
  });
}

export default movies;