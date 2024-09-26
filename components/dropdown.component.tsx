import MerchList from './ui/merchList.component'
import { ChevronLeft } from 'lucide-react'
import { makeGetRequest } from '@/utils/HttpRequests'
import { getAllCategoriesURL } from '@/api/recipe.api'

type RecipeCategory = {
  parent_id: string
  parent_name: string
  parent_description: string
  subcategories: Subcategory[]
}

type Subcategory = {
  id: string
  name: string
  description: string
}

const DropDown: React.FC = async () => {
  const dropDonwData: RecipeCategory[] = await makeGetRequest(getAllCategoriesURL)
  //TODO: handling the error, timeout , and data issue.
  return (
    <>
      <div className='flex gap-3 p-2 '>
        {dropDonwData.map((MC, index) => {
          return (
            <div className='relative flex flex-col p-2 group z-10 ' key={MC.parent_id}>
              <h6 className={`font-serif underLineDecoration flex items-center justify-center`}>
                {MC.parent_name}
                <ChevronLeft className='group-hover:-rotate-90 transition-all ease-in-out duration-300' size={'15px'} />
              </h6>
              <ul className='absolute mt-10 hidden group-hover:flex flex-col gap-2 p-2 items-start justify-start bg-yellow-400 border w-full shadow-sm'>
                {MC?.subcategories.map((SC, index) => {
                  return <MerchList key={index} listProps={SC.name} />
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default DropDown
