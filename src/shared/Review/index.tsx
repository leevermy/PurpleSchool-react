import { FC } from 'react'

const Review:FC<{ title: string, description: string }> = ({ title, description }) => {
  return (
	<div className='flex flex-col gap-y-4 p-10 rounded-3xl bg-[#20283ECC]/[0.8]'>
          <span className='text-gray-100 text-[20px]/[32px] font-semibold'>{title}</span>
          <p className='text-[#8E95A9] text-[20px]/[32px] font-normal'>{description}</p>
        </div>
  )
}

export default Review;