import clsx from 'clsx';
interface IButtonProps {
	children : React.ReactNode;
	disabled?: boolean;
	onClick?: () => void;
	className?: string;
	type?: "button" | "submit" | "reset" | undefined;
}

/**
 * @property {React.ReactNode} children
 * @property {boolean} [disabled] 
 * @property {string} [className] - Tailwind
 * @property {() => void}  onClick
 * @property {'button' | 'submit' | 'reset'} [type = 'submit'] 
 */
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