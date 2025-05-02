import { FC } from 'react'
import { useLoaderData } from 'react-router-dom';
import Rating from '../../components/shared/Rating';
import AddToFavoriteButton from '../../components/shared/AddToFavoriteButton';
import MovieInfo from '../../components/shared/MovieInfo';
import Review from '../../components/shared/Review';

const MoviePage: FC = () => {
  const movie = useLoaderData() as any;
  return (
	  <>
	    <div className='p-10 rounded-3xl bg-[#20283ECC]/[0.8] mb-20'>
        <span className='text-[12px]/[16px] font-semibold text-[#BEB7FB]'>Поиск фильмов</span>
        <h2 className='text-[32px]/[40px] font-semibold text-gray-50 -tracking-[0.035rem]'>{movie.name}</h2>
      </div>
      <div className='flex gap-x-20 mb-8'>
        <img className='w-[480px] h-[720px] rounded-3xl object-cover' src={movie.image} alt={movie.name}/>
        <div className='flex flex-col gap-y-6'>
          <p className='text-[#8E95A9] text-[20px]/[32px] font-normal'>{movie.description}</p>
          <div className='flex gap-x-6'>
            <Rating rating={movie.aggregateRating.ratingValue}/>
            <AddToFavoriteButton onClick={() => console.log('Added')}/>
          </div>
          <MovieInfo name={'Тип'} data={movie['@type']}/>
          <MovieInfo name={'Дата выхода'} data={movie.datePublished}/>
          <MovieInfo name={'Длительность'} data={''}/>
          <MovieInfo name={'Жанр'} data={movie.genre}/>
        </div>
      </div>
      <div className='flex flex-col gap-y-3.5'>
        <span className='text-[16px]/[24px] text-gray-400 font-normal'>Отзывы</span>
        <Review title={movie.review.name} description={movie.review.reviewBody}/>
      </div>
    </>
  )
}

export default MoviePage;