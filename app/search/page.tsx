import RecipeListComponent from '@/components/listingPage.component'
import { IBM_Flex } from '@/utils/fonts'

const SearchResultPage = () => {
  return (
    <>
      <div className='p-4 flex flex-col items-start justify-center gap-4'>
        <div>{/* Breadcrumbs */}</div>
        <h1 className={`${IBM_Flex.className} subHeadingStyle underLineDecoration`}>Your search Result</h1>
        <RecipeListComponent />
        <div>
          <h1 className={`${IBM_Flex.className} subHeadingStyle underLineDecoration`}>Try these categories</h1>
          {/* Categoy based blocks */}
        </div>
      </div>
    </>
  )
}
export default SearchResultPage
