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
  const onClickLink = `recipe/${recipeInfo?.recipename}`
  return (
    <>
      <div className='flex-shrink-0  w-60 p-1 bg-white hoverAnimation shadow-md'>
        <div className='relative flex flex-col justify-end'>
          <p className='absolute p-1 bg-slate-100 m-1 font-bold text-sm rounded-sm italic'>
            {recipeInfo?.recipecategory}
          </p>
          <Link href={onClickLink}>
            <Image src={recipeInfo?.recipemainimage} alt={recipeInfo?.recipemainimagealt} width={width} height={50} />
          </Link>
        </div>
        <div className='flex flex-col p-1.5 bg-white '>
          <Link href={onClickLink}>
            <p className='font-serif text-lg truncate'>{recipeInfo?.recipename}</p>
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
export default RecipeContainer
