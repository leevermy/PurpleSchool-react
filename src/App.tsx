import { useState } from 'react';
import Button from './components/Button'
import Description from './components/Description';
import Title from './components/Title';
import Header from './layout/Header';
import Input from './components/Input/Input';
import SearchIcon from './assets/LeftIcon.svg';
import MovieCard from './components/MovieCard';
import MoviesLayout from './layout/MoviesLayout';
import movies from './temporaryData';


function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleEvent = () => {
    alert(`Searching: ${searchValue}`);
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  const addToFavorite = () => { alert('Added to favorite') }

  return (
    <>
      <Header />
      <div className='container'>
        <Title className='mt-20'>Поиск</Title>
        <Description className='w-[450px]'>
          Введите название фильма, сериала или мультфильма <br/>для поиска и добавления в избранное.
        </Description>
        <div className='flex gap-2'>
          <Input value={searchValue} onChange={handleOnChange}placeholder='Введите название' icon={SearchIcon}/>
          <Button onClick={handleEvent} className='bg-violet-500 hover:bg-violet-600 py-4 px-8 text-gray-100'>Искать</Button>
        </div>
      </div>
      <MoviesLayout>
          {movies.map((movie, index) => (
          <MovieCard 
            key={index} 
            title={movie.title} 
            poster={movie.poster} 
            rating={movie.rating} 
            onClick={addToFavorite}/>
          ))}
      </MoviesLayout>
    </>
  )
}

export default App;
