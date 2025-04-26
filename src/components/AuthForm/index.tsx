import { useEffect, useState } from 'react';
import Button from '../Button'
import Input from '../Input/Input'
import Title from '../Title'
import { useUserContext } from '../../hooks';


const AuthForm: React.FC = () => {
	const { dataFromStorage, setDataFromStorage, setUserName} = useUserContext();
	const [formValue, setFormValue] = useState<string>('');
	const [error, setError] = useState<boolean>(false);

	const handleLogIn = (name: string):boolean => {
		const accountIndex = dataFromStorage.findIndex(el => el.name === name);
		if (accountIndex === -1) return true;
		const updated = [...dataFromStorage];
		updated[accountIndex] = {
			...updated[accountIndex],
			isLoggedIn: true,
		}
		setDataFromStorage(updated);
		setUserName(name);
		return false;
	}
	
	const onSubmit = (e: any) => {
		e.preventDefault();
		const isError = handleLogIn(formValue);
		setError(isError);
		if(!isError) setFormValue('');
		
	}

	useEffect(() => {
		const timerID = setTimeout(() => {
			setError(false);
			setFormValue('');
		}, 2000)
		return () => clearTimeout(timerID);
	}, [error])

	return (
		<form className='flex flex-col gap-7' onSubmit={onSubmit}>
          <Title className='mt-20'>Вход</Title>
		  <div>
            <Input 
				value={formValue} 
				onChange={(e) => setFormValue(e.target.value)} 
				placeholder='Ваше имя'/>
			{error && <p className='text-red-400 m-0 p-0'>There is no such user</p>}
		  </div>
            <Button 
				type="submit" 
				disabled={formValue === ''} 
				className={`${formValue === '' ? 'bg-violet-400' : 'bg-violet-500 hover:bg-violet-600'} py-4 px-8 text-gray-100`}
			>Войти в профиль</Button>
        </form>
	)
}

export default AuthForm;