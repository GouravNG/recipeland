import { IBM_Flex } from '@/utils/fonts'
import RecipeContainer from '../ui/recipeContainer.component'
import { MoveRightIcon } from 'lucide-react'

const Scroll = () => {
  return (
    <>
      <div className='flex items-center'>
        <h3 className={`${IBM_Flex.className} p-2 text-3xl underline decoration-yellow-300 decoration-4`}>
          Explre our recipes
        </h3>
        <MoveRightIcon />
      </div>
      <div className='bg-slate-600 flex gap-6 p-4'>
        <RecipeContainer width={300} />
        <RecipeContainer width={300} />
        <RecipeContainer width={300} />
        <RecipeContainer width={300} />
      </div>
    </>
  )
}
export default Scroll
