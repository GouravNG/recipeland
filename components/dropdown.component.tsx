import merchData from '@/dummyData/merch'
import { MerchData } from '@/types/common.type'
import MerchList from './ui/merchList.component'
import { ChevronLeft } from 'lucide-react'

const DropDown: React.FC = () => {
  const dropDonwData: MerchData = merchData
  return (
    <>
      <div className='flex gap-3 p-2 '>
        {dropDonwData.recipeHierarchy.map((i, index) => {
          return (
            <div className='relative flex flex-col p-2 group z-10 ' key={index}>
              <h6 className={`font-serif underLineDecoration flex items-center justify-center`}>
                {i.parentCategory}
                <ChevronLeft className='group-hover:-rotate-90 transition-all ease-in-out duration-300' size={'15px'} />
              </h6>
              <ul className='absolute mt-10 hidden group-hover:flex flex-col gap-2 p-2 items-start justify-start bg-yellow-400 border w-full shadow-sm'>
                {i?.subCategories.map((name, index) => {
                  return <MerchList key={index} listProps={name} />
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
