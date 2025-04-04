const Title: React.FC<{children: React.ReactNode, className?: string}> = ({children, className }) => {
	return (
		<h1
		className={`mb-4 text-[64px] text-gray-50 font-semibold leading-[0.8] ${className}`}>
			{children}
		</h1>
	)
}

export default Title;