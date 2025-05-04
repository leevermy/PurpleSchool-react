import { FC } from 'react'
import Button from '../../components/button'
import likeIcon from '../../assets/like.svg'

const AddToFavoriteButton: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
	<Button onClick={onClick}>
		<img src={likeIcon} alt="Favorite"/>
		<span className='text-violet-400'>В избранное</span>
	</Button>
  )
}

export default AddToFavoriteButton;