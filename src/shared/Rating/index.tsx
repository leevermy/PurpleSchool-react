import { FC } from 'react'
import starIcon from '../../assets/star.svg';
import cn from 'clsx'

const Rating:FC<{ rating: number | string, className?: string }> = ({ rating, className }) => {
  return (
	<div className={cn('inline-flex gap-2 py-1 px-2 rounded-lg top-2 left-2', className)}>
		<img src={starIcon} alt="rating"/>
		<span className='text-yellow-500'>{rating}</span>
	</div>
  )
}

export default Rating;