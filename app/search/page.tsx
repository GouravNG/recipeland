import RecipeContainer2 from '@/components/ui/recipeContainer2.component'
import { IBM_Flex } from '@/utils/fonts'

const SearchResultPage = () => {
  return (
    <>
      <div className='p-4 flex flex-col items-start justify-center gap-4'>
        <div>{/* Breadcrumbs */}</div>
        <h1 className={`${IBM_Flex.className} font-bold text-3xl underline decoration-yellow-300 decoration-4`}>
          Your search Result
        </h1>
        <div className='flex flex-wrap gap-6 justify-around'>
          <RecipeContainer2 />
          <RecipeContainer2 />
          <RecipeContainer2 />
          <RecipeContainer2 />
          <RecipeContainer2 />
        </div>
        <div>{/* Pagiation blocks */}</div>
        <div>
          <h1 className={`${IBM_Flex.className} font-bold text-3xl underline decoration-yellow-300 decoration-4`}>
            Try these categories
          </h1>
          {/* Categoy based blocks */}
        </div>
      </div>
    </>
  )
}
export default SearchResultPage
