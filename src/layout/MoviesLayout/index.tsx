const MoviesLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
	return (
		<div className='container py-20 grid grid-cols-4 gap-4'>
			{children}
		</div>
	)
}

export default MoviesLayout;