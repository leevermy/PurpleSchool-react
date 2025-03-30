import Button from './components/Button'
import Description from './components/Description';
import Title from './components/Title';

function App() {
  return (
    <>
      <div className='p-20 bg-gray-800'>
        <Title>Поиск</Title>
        <Description>
          Введите название фильма, сериала или мультфильма для   поиска и добавления в избранное.
        </Description>
        <Button onClick={() => console.log('clicked')}>Искать</Button>
    </div>
    </>
  )
}

export default App;
