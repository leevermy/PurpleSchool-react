export interface IButtonProps {
	children : React.ReactNode;
	disabled?: boolean;
	onClick?: () => void;
	className?: string;
	type?: "button" | "submit" | "reset" | undefined;
}