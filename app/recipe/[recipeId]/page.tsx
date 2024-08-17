import RDPHeader from '@/components/RDPBlocks/headerBlock'
import Ingredients from '@/components/RDPBlocks/ingredients'
import PreviewBlock from '@/components/RDPBlocks/preBlock'
import ReviewBlock from '@/components/RDPBlocks/reviewBlock'
import StepsOfRecipe from '@/components/RDPBlocks/stepsOfRecipe'
import UtilityComponent from '@/components/RDPBlocks/utilityComponent'

const RDP = () => {
  return (
    <>
      <RDPHeader />
      <div className='flex'>
        <div className='flex flex-col'>
          <PreviewBlock />
          <Ingredients />
          <div className='p-2'>
            <h2 className='bg-black text-white text-2xl p-1 py-2'>Recipe Steps</h2>
          </div>
          <StepsOfRecipe />
          <StepsOfRecipe />
          <StepsOfRecipe />
          <StepsOfRecipe />
          <StepsOfRecipe />
          <ReviewBlock />
        </div>
        <div>
          <UtilityComponent />
        </div>
      </div>
    </>
  )
}
export default RDP
