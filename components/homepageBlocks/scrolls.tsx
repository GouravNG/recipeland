import { IBM_Flex } from '@/utils/fonts'
import RecipeContainer from '../ui/recipeContainer.component'
import { MoveRightIcon } from 'lucide-react'
import { getAllRecipes } from '@/dummyData/getAllRecipe'
import { RecipeInfo } from '@/types/common.type'

const Scroll = () => {
  const recipesData: RecipeInfo[] = getAllRecipes
  return (
    <>
      <div className='flex items-center p-4'>
        <h3 className={`${IBM_Flex.className} p-2 subHeadingStyle underLineDecoration`}>Explre our recipes</h3>
        <MoveRightIcon />
      </div>
      <div className='bg-slate-300 flex gap-8 p-4 py-8 overflow-x-auto overflow-y-hidden whitespace-nowrap'>
        {recipesData.map((recipe, index) => {
          return <RecipeContainer recipeInfo={recipe} key={index} />
        })}
      </div>
    </>
  )
}
export default Scroll
