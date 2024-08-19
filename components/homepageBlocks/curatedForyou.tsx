import { IBM_Flex } from '@/utils/fonts'
import RecipeContainer2 from '../ui/recipeContainer2.component'
import { getAllRecipes } from '@/dummyData/getAllRecipe'
import { RecipeInfo } from '@/types/common.type'

const CuratedForYou = () => {
  const recipesData: RecipeInfo[] = getAllRecipes
  return (
    <div className='flex flex-col items-center p-4'>
      <h1 className={`${IBM_Flex.className} subHeadingStyle underLineDecoration`}>Curated For you</h1>
      <div className='flex flex-wrap items-center justify-center gap-6 p-4'>
        {recipesData.map((recipe, index) => {
          return <RecipeContainer2 recipeInfo={recipe} key={index} />
        })}
      </div>
    </div>
  )
}
export default CuratedForYou
