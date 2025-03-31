interface IInputProps {
	icon?: string;
	value: string;
	placeholder: string;
}
const Input: React.FC<IInputProps> = ({ icon, value, placeholder }) => {
	return (
		<div className='flex py-3 px-4 rounded-xl border border-gray-700 w-[344px]  bg-black/10'>
			{icon && <img src={icon} className='mr-4 w-[24px]'/>}
			<input type="text" className='text-gray-100 w-full' value={value} placeholder={placeholder}/>
		</div>
	);
}

export default Input;