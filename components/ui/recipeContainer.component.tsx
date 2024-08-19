import { RecipeInfo } from '@/types/common.type'
import Image from 'next/image'
import FavouriteComponent from './favourite.component'
import { Star } from 'lucide-react'
import Link from 'next/link'

type RecipeContainerProps = {
  recipeInfo: RecipeInfo
  width?: number
}

const RecipeContainer: React.FC<RecipeContainerProps> = ({ width = 240, recipeInfo }) => {
  return (
    <>
      <Link href={`recipe/${recipeInfo?.recipeName}`}>
        <div className='flex-shrink-0  w-60 p-1 bg-white hoverAnimation'>
          <div className='relative flex flex-col justify-end'>
            <p className='absolute p-1 bg-slate-100 m-1 font-bold text-sm rounded-sm italic'>
              {recipeInfo?.recipeCategory}
            </p>
            <Image src={recipeInfo?.recipeMainImage} alt={recipeInfo?.recipeMainImageAlt} width={width} height={50} />
          </div>
          <div className='flex flex-col p-1.5 bg-white '>
            <p className='font-serif text-lg'>{recipeInfo?.recipeName}</p>
            <p className='flex place-items-center gap-1'>
              {recipeInfo?.recipeRating}
              <Star fill='gold' strokeWidth={'.5px'} size={'15px'} />
            </p>
          </div>
        </div>
      </Link>
    </>
  )
}
export default RecipeContainer
