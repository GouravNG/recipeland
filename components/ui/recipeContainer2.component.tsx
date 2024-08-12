import { HeartIcon, Star } from 'lucide-react'
import Image from 'next/image'

const RecipeContainer2 = () => {
  return (
    <>
      <div className='flex flex-col p-1 my-4 bg-gray-50 shadow-md'>
        <div className='relative flex justify-end w-72 h-60'>
          <Image
            src='/cheese.jpg'
            alt='cheese'
            layout='fill' // Fill the container
            objectFit='cover' // Cover the container, allowing the image to zoom in
            objectPosition='center' // Center the image within the container
            quality={100} // Optional: High-quality rendering
          />
          <div className='absolute p-2'>
            <HeartIcon fill='true' />
          </div>
        </div>
        <div className='flex flex-col items-start gap-2 p-2'>
          <div className='font-thin'>Soup</div>
          <div className='font-serif text-xl '>Strawberry cheese cake</div>
          <div className='flex place-items-center gap-2'>
            {4.2}
            <Star />
          </div>
        </div>
      </div>
    </>
  )
}
export default RecipeContainer2
