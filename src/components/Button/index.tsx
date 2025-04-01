interface IButtonProps {
	children : React.ReactNode;
	disabled?: boolean;
	onClick: () => void;
	className?: string;
}

/**
 * 
 * @property {React.ReactNode} children
 * @property {boolean} [disabled = false]
 * @property {string} [className] - classes from Tailwind
 * @property {() => void} onClick
 */
const Button: React.FC<IButtonProps> = ({ children, disabled = false, onClick, className = ''}) => {
	return (
		<button
		onClick={disabled ? undefined : onClick}
		className={`flex gap-2 rounded-xl cursor-pointer transition duration-300 ${className}`}
		>{children}</button>
	)
}

export default Button;