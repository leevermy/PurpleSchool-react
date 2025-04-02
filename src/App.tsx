import { useState } from 'react';
import Header from './layout/Header';
import MovieCard from './components/MovieCard';
import MoviesLayout from './layout/MoviesLayout';
import AuthForm from './components/AuthForm';
import Search from './components/Search';

import movies from './temporaryData';


function App() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [userName, setUserName] = useState<string>('');

  return (
    <>
      <Header />
      <div className='container grid grid-cols-2 gap-4'>
        <Search value={searchValue} setValue={setSearchValue}/>
        <AuthForm value={userName} setValue={setUserName}/>
      </div>

      <MoviesLayout>
          {movies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            title={movie.title} 
            poster={movie.poster} 
            rating={movie.rating} 
            onClick={() => alert('Added to favorite')}/>
          ))}
      </MoviesLayout>
    </>
  )
}

export default App;
