const Description: React.FC<{children: React.ReactNode, className?: string}> = ({children, className }) => {
	return (
		<p
		className={`mb-7 text-gray-300 leading-[1.5] ${className}`}>
			{children}
		</p>
	)
}

export default Description;