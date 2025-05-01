import { FC } from 'react'
import Button from '../../button'
import likeIcon from '../../../assets/liked.svg'

const AddToFavoriteButton: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
	<Button onClick={onClick}>
		<img src={likeIcon} alt="Favorite"/>
		<span className='text-violet-400'>В избранное</span>
	</Button>
  )
}

export default AddToFavoriteButton;