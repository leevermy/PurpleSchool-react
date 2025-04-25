import clsx from 'clsx';
import { IButtonProps } from './props';

const Button: React.FC<IButtonProps> = ({ children, disabled = false, onClick, className = '', type='button'}) => {
	return (
		<button
		type={type}
		onClick={disabled ? undefined : onClick}
		disabled={disabled}
		className={clsx(
			'flex gap-2 items-center rounded-xl transition duration-300 w-fit',
			{
			  'cursor-not-allowed opacity-50': disabled,
			  'cursor-pointer': !disabled,
			},
			className
		  )}
		>{children}</button>
	)
}

export default Button;