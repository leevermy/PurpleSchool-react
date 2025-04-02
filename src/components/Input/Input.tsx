interface IInputProps {
	icon?: string;
	value: string;
	placeholder: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * 
 * @property {string} [icon]
 * @property {string} value - value in input
 * @property {string} [placeholder]
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange
 */
const Input: React.FC<IInputProps> = ({ icon, value, placeholder, onChange }) => {
	return (
		<div className='flex py-3 px-4 items-center rounded-xl border border-gray-700 w-[344px] h-[56px] bg-black/10'>
			{icon && <img src={icon} className='mr-4 w-[24px] block'/>}
			<input type="text" onChange={onChange} className='text-gray-100 w-full  bg-transparent outline-none' value={value} placeholder={placeholder}/>
		</div>
	);
}

export default Input;