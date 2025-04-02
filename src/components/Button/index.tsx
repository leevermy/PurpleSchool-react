interface IButtonProps {
	children : React.ReactNode;
	disabled?: boolean;
	onClick?: () => void;
	className?: string;
	type?: "button" | "submit" | "reset" | undefined;
}

/**
 * 
 * @property {React.ReactNode} children
 * @property {boolean} [disabled = false]
 * @property {string} [className] - classes from Tailwind
 * @property {() => void} onClick
 * @property {string} type
 */
const Button: React.FC<IButtonProps> = ({ children, disabled = false, onClick, className = '', type='button'}) => {
	return (
		<button
		type={type}
		onClick={disabled ? undefined : onClick}
		className={`flex gap-2 items-center rounded-xl cursor-pointer transition duration-300 ${className}`}
		>{children}</button>
	)
}

export default Button;