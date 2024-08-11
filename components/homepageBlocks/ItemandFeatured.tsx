import { handwriting, IBM_Flex } from '@/utils/fonts'
import { Coffee, EggIcon, MoveRightIcon } from 'lucide-react'
import Image from 'next/image'
import RecipeContainer from '../ui/recipeContainer.component'

export const ItemAndFeatured = () => {
  const quote =
    '“Cooking is like snow skiing: If you don’t fall at least 10 times, then you’re not skiing hard enough.” — Guy Fieri'
  return (
    <>
      <div className='flex p-4 px-20 justify-between gap-4'>
        <div className='relative border p-2 bg-slate-700 flex items-end justify-center'>
          <Image src={'/cheese.jpg'} alt='cheesecake' height={500} width={600} />
          <div className='absolute flex flex-col items-center bg-slate-100 m-10 mx-20 p-5 px-10 gap-2 opacity-75 border-4 border-yellow-400'>
            <p className='font-bold text-sm text-red-500'>Easy Dessert</p>
            <h1 className={`${IBM_Flex.className} antialiased font-bold text-5xl text-center`}>
              The 5 min strawberry dessert
            </h1>
            <p className='italic'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus repellendus, aspernatur neque
            </p>
          </div>
        </div>
        <div className='flex flex-col'>
          <Image src={'/kitchen.png'} alt='kitchen' width={460} height={300} />
          <p className={`${handwriting.className} font-bold text-xl text-center`}>{quote}</p>
          <div className='flex items-start pt-2'>
            <div className='flex flex-col gap-2 p-2'>
              <div className='flex gap-2 items-center'>
                <h1 className='font-bold text-2xl underline decoration-yellow-300 decoration-4 '>Trending Recipes</h1>
                <MoveRightIcon />
              </div>
              <div className='flex py-3 gap-20 items-center'>
                {/* reipe containers */}
                <RecipeContainer />
                <RecipeContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
