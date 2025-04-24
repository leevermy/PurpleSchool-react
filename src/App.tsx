import { FC } from 'react';
import Header from './layout/Header';
import MovieCard from './components/MovieCard';
import MoviesLayout from './layout/MoviesLayout';
import AuthForm from './components/AuthForm';
import Search from './components/Search';

import {movies} from './temporaryData';
import { UserContextProvider } from './context/user.context'



const App: FC = () => {
  
  return (
    <UserContextProvider>
      <Header />
      <div className='container grid grid-cols-2 gap-4'>
        <Search/>
        <AuthForm />
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
    </UserContextProvider>
  )
}

export default App;
