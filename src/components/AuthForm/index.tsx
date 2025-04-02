import { useState } from 'react';
import Button from '../Button'
import Input from '../Input/Input'
import Title from '../Title'


interface IAuthFormProps {
	setValue: (e: any) => void;
}

const AuthForm: React.FC<IAuthFormProps> = ({ setValue }) => {
	const [formValue, setFormValue] = useState<string>('');
	
	const onSubmit = (e: any) => {
		e.preventDefault();
		setValue(formValue);
		setFormValue('');
	}

	return (
		<form className='flex flex-col gap-7' onSubmit={onSubmit}>
          <Title className='mt-20'>Вход</Title>
            <Input 
				value={formValue} 
				onChange={(e) => setFormValue(e.target.value)} 
				placeholder='Ваше имя'/>
            <Button 
				type="submit" 
				disabled={formValue === ''} 
				className={`${formValue === '' ? 'bg-violet-400' : 'bg-violet-500 hover:bg-violet-600'} py-4 px-8 text-gray-100`}
			>Войти в профиль</Button>
        </form>
	)
}

export default AuthForm;