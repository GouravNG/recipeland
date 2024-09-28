import { getRecipeInfoByRecipeNameURL } from '@/api/recipe.api'
import RDPHeader from '@/components/RDPBlocks/headerBlock'
import Ingredients from '@/components/RDPBlocks/ingredients'
import PreviewBlock from '@/components/RDPBlocks/preBlock'
import ReviewBlock from '@/components/RDPBlocks/reviewBlock'
import UtilityComponent from '@/components/RDPBlocks/utilityComponent'
import RecipeSteps from '@/components/recipeSteps.component'
import { RecipeDetails } from '@/types/common.type'
import { makeGetRequest } from '@/utils/HttpRequests'

const RDP = async ({ params }: { params: { recipeId: string } }) => {
  const data = await makeGetRequest(getRecipeInfoByRecipeNameURL, {
    key: 'recipe_name',
    value: params.recipeId.replaceAll('%20', ' '),
  })
  const RDPInfo: RecipeDetails = data[0]
  return (
    <>
      <div>
        <RDPHeader RDPInfo={RDPInfo} />
        <div className='flex'>
          <div className='flex flex-col mx-10 w-3/4'>
            <PreviewBlock previewText={RDPInfo?.recipedescription} />
            <Ingredients ingredinets={RDPInfo?.recipeingredients} />
            <RecipeSteps recipeSteps={RDPInfo?.recipemethod} />
          </div>
          <div className='p-2 w-1/4 flex flex-col border-l-4 border-slate-400 items-center justify-start'>
            <UtilityComponent />
          </div>
        </div>
        <div className='p-2 mx-10'>
          <ReviewBlock />
        </div>
      </div>
    </>
  )
}
export default RDP
