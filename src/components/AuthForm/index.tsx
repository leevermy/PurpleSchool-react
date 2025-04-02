import Button from '../Button'
import Input from '../Input/Input'
import Title from '../Title'


interface IAuthFormProps {
	value: string;
	setValue: (e: any) => void;
}

const AuthForm: React.FC<IAuthFormProps> = ({value, setValue}) => {
	
	const onSubmit = (e: any) => {
		e.preventDefault();
		alert('Logged in')
	}
	return (
		<form className='flex flex-col gap-7' onSubmit={onSubmit}>
          <Title className='mt-20'>Вход</Title>
            <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder='Ваше имя'/>
            <Button type="submit" className='bg-violet-500 hover:bg-violet-600 py-4 px-8 text-gray-100 self-start'>Войти в профиль</Button>
        </form>
	)
}

export default AuthForm;