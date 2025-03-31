import Button from './components/Button'
import Description from './components/Description';
import Title from './components/Title';
import Header from './layout/Header';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Title className='mt-20'>Поиск</Title>
        <Description>
          Введите название фильма, сериала или мультфильма для   поиска и добавления в избранное.
        </Description>
        <Button onClick={() => console.log('clicked')}>Искать</Button>
      </div>
    </>
  )
}

export default App;
