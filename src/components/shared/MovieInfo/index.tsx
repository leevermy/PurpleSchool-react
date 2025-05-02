import { FC } from 'react'

const MovieInfo:FC<{name: string, data: string}> = ({ name, data }) => {
	const info = Array.isArray(data) ? data.join(', ') : data;
  return (
	<div className='flex flex-col gap-y-2'>
		<span className='text-gray-400 text-[16px]/[24px] font-normal'>{name}</span>
		<span className='text-gray-100 text-[20px]/[32px] font-normal'>{info}</span>
	</div>
  )
}

export default MovieInfo;