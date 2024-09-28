import { getAllRecipesByCategoryNameURL } from '@/api/recipe.api'
import FilterComponent from '@/components/filter.component'
import RecipeListComponent from '@/components/listingPage.component'
import { IBM_Flex } from '@/utils/fonts'
import { makeGetRequest } from '@/utils/HttpRequests'

const RLP = async ({ params }: { params: { categoryId: string } }) => {
  const categoryName = params.categoryId.replaceAll('%20', ' ')
  const data = await makeGetRequest(getAllRecipesByCategoryNameURL, {
    key: 'categoryname',
    value: categoryName,
  })
  return (
    <>
      <div className='flex p-1 m-1'>
        <div className='flex flex-col bg-slate-400 p-2'>
          <FilterComponent />
        </div>
        <div className='p-4 flex flex-col items-start justify-center gap-4'>
          <div>{/* Breadcrumbs */}</div>
          <h1 className={`${IBM_Flex.className} font-bold text-3xl underline decoration-yellow-300 decoration-4`}>
            {categoryName}
          </h1>
          <RecipeListComponent data={data} />
        </div>
      </div>
    </>
  )
}
export default RLP
