import { useState } from 'react';
import Button from './components/Button'
import Description from './components/Description';
import Title from './components/Title';
import Header from './layout/Header';
import Input from './components/Input/Input';
import SearchIcon from './assets/LeftIcon.svg';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleEvent = () => {
    console.log(searchValue);
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

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
          <Button onClick={handleEvent}>Искать</Button>
        </div>
      </div>
    </>
  )
}

export default App;
