import { RecipeInfo } from '@/types/common.type'
import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import FavouriteComponent from './favourite.component'

type RecipeContainerProps = {
  recipeInfo: RecipeInfo
}

const RecipeContainer2: React.FC<RecipeContainerProps> = ({ recipeInfo }) => {
  const onClickLink = `recipe/${recipeInfo?.recipeName}`
  return (
    <>
      <div className='flex flex-col p-1 my-4 bg-gray-50 shadow-md hoverAnimation hover:shadow-xl'>
        <div className='relative flex justify-end w-72 h-60'>
          <Link href={onClickLink}>
            <Image
              src={recipeInfo?.recipeMainImage}
              alt={recipeInfo?.recipeMainImageAlt}
              fill={true}
              quality={100}
              className='object-cover object-center'
            />
          </Link>
          <FavouriteComponent />
        </div>
        <div className='flex flex-col items-start gap-2 p-2'>
          <p className='font-thin italic'>{recipeInfo?.recipeCategory}</p>
          <Link href={onClickLink}>
            <p className='font-serif text-xl '>{recipeInfo?.recipeName}</p>
          </Link>
          <p className='flex place-items-center gap-1'>
            {recipeInfo?.recipeRating}
            <Star fill='gold' strokeWidth={'.5px'} size={'15px'} />
          </p>
        </div>
      </div>
    </>
  )
}
export default RecipeContainer2
