import { RecipeInfo } from '@/types/common.type'
import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import FavouriteComponent from './favourite.component'

type RecipeContainerProps = {
  recipeInfo: RecipeInfo
}

const RecipeContainer2: React.FC<RecipeContainerProps> = ({ recipeInfo }) => {
  const onClickLink = `recipe/${recipeInfo?.recipename}`
  return (
    <>
      <div className='flex flex-col p-1 my-4 w-74 bg-gray-50 shadow-md hoverAnimation hover:shadow-xl'>
        <div className='relative flex justify-end w-72 h-60'>
          <Link href={onClickLink}>
            <Image
              src={recipeInfo?.recipemainimage}
              alt={recipeInfo?.recipemainimagealt}
              fill={true}
              quality={100}
              className='object-cover object-center'
            />
          </Link>
          <FavouriteComponent />
        </div>
        <div className='flex flex-col items-start gap-2 p-2'>
          <p className='font-thin italic'>{recipeInfo?.recipecategory}</p>
          <Link href={onClickLink} className='w-full'>
            <p className='font-serif text-xl truncate'>{recipeInfo?.recipename}</p>
          </Link>
          <p className='flex place-items-center gap-1'>
            {recipeInfo?.reciperating}
            <Star fill='gold' strokeWidth={'.5px'} size={'15px'} />
          </p>
        </div>
      </div>
    </>
  )
}
export default RecipeContainer2
