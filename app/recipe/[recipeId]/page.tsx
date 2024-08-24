import RDPHeader from '@/components/RDPBlocks/headerBlock'
import Ingredients from '@/components/RDPBlocks/ingredients'
import PreviewBlock from '@/components/RDPBlocks/preBlock'
import ReviewBlock from '@/components/RDPBlocks/reviewBlock'
import UtilityComponent from '@/components/RDPBlocks/utilityComponent'
import RecipeSteps from '@/components/recipeSteps.component'
import { getRecipeDetails } from '@/dummyData/getRecipeDetails'
import { RecipeDetails } from '@/types/common.type'

const RDP = () => {
  const RDPInfo: RecipeDetails = getRecipeDetails[2]
  return (
    <>
      <div>
        <RDPHeader RDPInfo={RDPInfo} />
        <div className='flex'>
          <div className='flex flex-col mx-10 w-3/4'>
            <PreviewBlock previewText={RDPInfo?.recipeDescription} />
            <Ingredients ingredinets={RDPInfo?.recipeIngredients} />
            <RecipeSteps recipeSteps={RDPInfo?.recipeMethod} />
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
