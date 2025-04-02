const Badge: React.FC<{ quantity: number }> = ({quantity}) => {
	return (
		<div className=' text-gray-100 bg-violet-600 px-2 rounded-full'>{quantity}</div>
	)
}

export default Badge;