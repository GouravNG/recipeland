import { fuzzySearchOnRecipe } from '@/api/recipe.api'
import RecipeListComponent from '@/components/listingPage.component'
import { IBM_Flex } from '@/utils/fonts'
import { makeGetRequest } from '@/utils/HttpRequests'
import { useSearchParams } from 'next/navigation'

const SearchResultPage = async ({ searchParams }: { searchParams: { query: string } }) => {
  const data = await makeGetRequest(fuzzySearchOnRecipe, { key: 'search_text', value: searchParams.query })
  return (
    <>
      <div className='p-4 flex flex-col items-start justify-center gap-4'>
        <div>{/* Breadcrumbs */}</div>
        <h1 className={`${IBM_Flex.className} subHeadingStyle underLineDecoration`}>Your search Result</h1>
        <RecipeListComponent data={data} />
        {!data.length && <h1>No result found</h1>}
        <div>
          <h1 className={`${IBM_Flex.className} subHeadingStyle underLineDecoration`}>Try these categories</h1>
          {/* Categoy based blocks */}
        </div>
      </div>
    </>
  )
}
export default SearchResultPage
