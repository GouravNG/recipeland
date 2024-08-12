import { IBM_Flex } from '@/utils/fonts'
import RecipeContainer from '../ui/recipeContainer.component'
import { MoveRightIcon } from 'lucide-react'

const Scroll = () => {
  return (
    <>
      <div className='flex items-center p-4'>
        <h3 className={`${IBM_Flex.className} p-2 text-3xl underline decoration-yellow-300 decoration-4`}>
          Explre our recipes
        </h3>
        <MoveRightIcon />
      </div>
      <div className='bg-slate-300 flex gap-8 p-4 py-8 overflow-x-auto overflow-y-hidden whitespace-nowrap'>
        <RecipeContainer width={300} />
        <RecipeContainer width={300} />
        <RecipeContainer width={300} />
        <RecipeContainer width={300} />
        <RecipeContainer width={300} />
      </div>
    </>
  )
}
export default Scroll
