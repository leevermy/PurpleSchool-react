import clsx from 'clsx';
import { IInputProps } from './props';

const Input: React.FC<IInputProps> = ({ icon, value, placeholder, className, onChange }) => {
	return (
		<div className={clsx('flex py-3 px-4 items-center rounded-xl border border-gray-700 w-full max-w-[344px] h-14 bg-black/10', className)}>
			{icon && 
				<img src={icon} className='mr-4 w-[24px] block'/>
			}
			
			<input 
				type="text" 
				onChange={onChange} 
				className='text-gray-100 w-full  bg-transparent outline-none' 
				value={value} 
				placeholder={placeholder}
			/>
		</div>
	);
}

export default Input;