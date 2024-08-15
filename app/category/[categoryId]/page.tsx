import RecipeContainer2 from '@/components/ui/recipeContainer2.component'
import { IBM_Flex } from '@/utils/fonts'

const RLP = () => {
  return (
    <>
      <div className='flex p-1 m-1'>
        <div className='flex flex-col bg-slate-400 p-2'>
          <h3>Filters</h3>
        </div>
        <div className='p-4 flex flex-col items-start justify-center gap-4'>
          <div>{/* Breadcrumbs */}</div>
          <h1 className={`${IBM_Flex.className} font-bold text-3xl underline decoration-yellow-300 decoration-4`}>
            Desserts
          </h1>
          <div className='flex flex-wrap gap-6 justify-around'>
            <RecipeContainer2 />
            <RecipeContainer2 />
            <RecipeContainer2 />
            <RecipeContainer2 />
            <RecipeContainer2 />
          </div>
          <div>{/* Pagiation blocks */}</div>
        </div>
      </div>
    </>
  )
}
export default RLP
