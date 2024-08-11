import { IBM_Flex } from '@/utils/fonts'

type DropDownType = {
  dropDonwData: MerchData
}

const DropDown: React.FC<DropDownType> = ({ dropDonwData }) => {
  return (
    <>
      <div className='flex gap-3 p-2'>
        {dropDonwData.recipeHierarchy.map((i, index) => {
          return (
            <>
              <div className='relative flex flex-col p-2 group'>
                <h1
                  key={index}
                  className={`${IBM_Flex.className} underline decoration-yellow-300 decoration-4 underline-offset-4 hover:decoration-red-600`}
                >
                  {i.parentCategory}
                </h1>
                <ul className='absolute mt-10 hidden group-hover:flex flex-col gap-2 p-2 items-center justify-start  bg-yellow-400 border w-full shadow-sm'>
                  {i.subCategories.map((i, index) => {
                    return (
                      <li key={index} className='w-full'>
                        {i}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}
export default DropDown
