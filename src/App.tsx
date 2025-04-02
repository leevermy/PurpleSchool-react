import { useEffect, useState } from 'react';
import Header from './layout/Header';
import MovieCard from './components/MovieCard';
import MoviesLayout from './layout/MoviesLayout';
import AuthForm from './components/AuthForm';
import Search from './components/Search';

import {movies, usersStorage, getNavItems} from './temporaryData';

interface IDataFromStorage {
  name:string;
  isLoggedIn:boolean;
}

function App() {
  const [ searchValue, setSearchValue ] = useState<string>('');
  const [ userName, setUserName ] = useState<string>('');
  const [ dataFromStorage, setDataFromStorage ] = useState<IDataFromStorage[]>(usersStorage);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(dataFromStorage));
  }, [dataFromStorage]);

  const handleLogIn = (username: string): boolean => {
    const user = dataFromStorage.filter(user => user.name === username);
    console.log(user)
    if (user.length === 0) {
      return true;
    }
    const updatedStorage = dataFromStorage.map((user) => 
      user.name === username ? {...user, isLoggedIn: true}: user
    );
    setDataFromStorage(updatedStorage);
    setUserName(username);
    return false;
  }

  const handleLogOut = () => {
  const updated = [
    ...dataFromStorage.filter(item => item.name !== userName),
    { name: userName, isLoggedIn: false }
  ];
  setDataFromStorage(updated);
  setUserName('');
};

  const navItems = getNavItems(userName, handleLogOut);


  return (
    <>
      <Header navItems={navItems}/>
      <div className='container grid grid-cols-2 gap-4'>
        <Search value={searchValue} setValue={setSearchValue}/>
        <AuthForm handleLogIn={handleLogIn}/>
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
