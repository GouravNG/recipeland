import { IBM_Flex } from '@/utils/fonts'
import RecipeContainer2 from '../ui/recipeContainer2.component'

const CuratedForYou = () => {
  return (
    <div className='flex flex-col items-center p-4'>
      <h1 className={`${IBM_Flex.className} font-bold text-3xl underline decoration-yellow-300 decoration-4`}>
        Curated For you
      </h1>
      <div className='flex flex-wrap items-center justify-center gap-6 p-4'>
        <RecipeContainer2 />
        <RecipeContainer2 />
        <RecipeContainer2 />
        <RecipeContainer2 />
        <RecipeContainer2 />
        <RecipeContainer2 />
        <RecipeContainer2 />
      </div>
    </div>
  )
}
export default CuratedForYou
