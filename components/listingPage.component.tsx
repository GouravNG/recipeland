import { RecipeInfo } from '@/types/common.type'
import RecipeContainer2 from './ui/recipeContainer2.component'
import { getAllRecipes } from '@/dummyData/getAllRecipe'

const RecipeListComponent: React.FC = () => {
  const recipeInfoArray = getAllRecipes
  return (
    <>
      <div className='flex flex-wrap gap-6 justify-around'>
        {recipeInfoArray?.map((recipe, index) => {
          return <RecipeContainer2 recipeInfo={recipe} key={index} />
        })}
      </div>
      <div>{/* Pagiation blocks */}</div>
    </>
  )
}
export default RecipeListComponent
