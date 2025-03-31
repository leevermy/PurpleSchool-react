import { useState } from 'react';
import Button from './components/Button'
import Description from './components/Description';
import Title from './components/Title';
import Header from './layout/Header';
import Input from './components/Input/Input';
import SearchIcon from './assets/LeftIcon.svg';

function App() {
  const [event, setEvent] = useState('');

  const handleEvent = () => {
    setEvent('search');
  }

  return (
    <>
      <Header />
      <div className='container'>
        <Title className='mt-20'>Поиск</Title>
        <Description className='w-[588px]'>
          Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
        </Description>
        <div className='flex gap-12'>
          <Input value={event} placeholder='Введите название' icon={SearchIcon}/>
          <Button onClick={handleEvent}>Искать</Button>
        </div>
      </div>
    </>
  )
}

export default App;
