import { RecipeInfo } from '@/types/common.type'
import RecipeContainer2 from './ui/recipeContainer2.component'
import { makeGetRequest } from '@/utils/HttpRequests'
import { getAllRecipesByCategoryNameURL } from '@/api/recipe.api'

type RecipeListComponentTypes = {
  data: RecipeInfo[]
}

const RecipeListComponent: React.FC<RecipeListComponentTypes> = async ({ data }) => {
  const recipeInfoArray: RecipeInfo[] = data
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
