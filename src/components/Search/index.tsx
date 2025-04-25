import Button from '../Button';
import Description from '../Description'
import Input from '../Input/Input'
import Title from '../Title'
import SearchIcon from '../../assets/LeftIcon.svg';
import { useUserContext } from '../../hooks';

const Search: React.FC = () => {
	const { searchValue, setSearchValue } = useUserContext();

	const handleSearch = () => {
		alert(`Searching: ${searchValue}`);
	}

	return (
		<div>
			<Title className='mt-20'>Поиск</Title>

			<Description className='w-[450px]'>
				Введите название фильма, сериала или мультфильма<br />для поиска и добавления в избранное.
			</Description>

			<div className='flex gap-2'>
				<Input value={searchValue || ''} onChange={(e) => setSearchValue(e.target.value)} placeholder='Введите название' icon={SearchIcon} />
				<Button onClick={handleSearch} disabled={searchValue === ''} 
				className={`${searchValue === '' ? 'bg-violet-400' : 'bg-violet-500 hover:bg-violet-600'}  py-4 px-8 text-gray-100`}>Искать</Button>
			</div>
		</div>
	)
}

export default Search;