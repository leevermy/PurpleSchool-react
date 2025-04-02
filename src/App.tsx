import { useEffect, useState } from 'react';
import Header from './layout/Header';
import MovieCard from './components/MovieCard';
import MoviesLayout from './layout/MoviesLayout';
import AuthForm from './components/AuthForm';
import Search from './components/Search';

import {movies, getNavItems} from './temporaryData';

/*
[{"name":"Алексей", "isLoggedIn":"false"}, {"name":"Василий", "isLoggedIn":"false"]
*/

interface IDataFromStorage {
  name:string;
  isLoggedIn:boolean;
}

function App() {
  const [ searchValue, setSearchValue ] = useState<string>('');
  const [ userName, setUserName ] = useState<string>('');
  const [ dataFromStorage, setDataFromStorage ] = useState<IDataFromStorage[]>(JSON.parse(localStorage.getItem('users') ?? ''));

  const logOut = () => {
  const updated = [
    ...dataFromStorage.filter(item => item.name !== userName),
    { name: userName, isLoggedIn: false }
  ];
  setDataFromStorage(updated);
  setUserName('');
};

  const navItems = getNavItems(userName, logOut);
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(dataFromStorage));
  }, [dataFromStorage]);

  return (
    <>
      <Header navItems={navItems}/>
      <div className='container grid grid-cols-2 gap-4'>
        <Search value={searchValue} setValue={setSearchValue}/>
        <AuthForm setValue={setUserName}/>
      </div>

      <MoviesLayout>
          {movies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            isFavorite={movie.isFavorite}
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
