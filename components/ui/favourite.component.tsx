'use client'
import { HeartIcon } from 'lucide-react'
import { useState } from 'react'

const FavouriteComponent = () => {
  const [isFavourite, setIsFavorite] = useState<boolean>(false)
  const handleClick = () => {
    setIsFavorite(!isFavourite)
  }
  return (
    <>
      <div className='absolute p-2'>
        <HeartIcon
          fill={isFavourite ? 'red' : 'none'}
          strokeWidth={'.5px'}
          size={'30px'}
          onClick={(e) => {
            e.stopPropagation() // not working need to fix
            handleClick()
          }}
        />
      </div>
    </>
  )
}

export default FavouriteComponent
