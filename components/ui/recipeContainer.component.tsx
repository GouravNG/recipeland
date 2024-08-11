import { ForkKnifeCrossed, MessageCircle, Star, StarIcon } from 'lucide-react'
import Image from 'next/image'

const RecipeContainer = () => {
  return (
    <>
      <div>
        <div className='relative flex items-end '>
          <Image src={'/cheese.jpg'} alt='cheese' width={210} height={50} />
          <p className='absolute p-1 bg-slate-100 m-1 font-bold text-sm rounded-sm'>Desert</p>
        </div>
        <div className='flex flex-col p-1'>
          <div className='flex items-center justify-between px-2'>
            <div className='flex items-center'>
              <MessageCircle fill='true' size='20' />
              <p>10</p>
            </div>
            <div className='flex items-center'>
              <StarIcon fill='true' size='20' />
              <p>10</p>
            </div>
          </div>
          <div className='pt-2'>
            <h3 className='font-bold'>Straberry Cheese Cake</h3>
          </div>
        </div>
      </div>
    </>
  )
}
export default RecipeContainer
