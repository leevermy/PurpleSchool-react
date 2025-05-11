import Button from '../button';
import Description from '../description'
import Input from '../input/Input'
import Title from '../title'
import SearchIcon from '../../assets/LeftIcon.svg';
import { useUserContext } from '../../hooks';
import { useNavigate } from 'react-router-dom';

const Search: React.FC = () => {
	const { searchValue, setSearchValue } = useUserContext();

	const navigate = useNavigate();

	const handleSearch = () => {
		navigate(`/?q=${searchValue}`);
	};

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