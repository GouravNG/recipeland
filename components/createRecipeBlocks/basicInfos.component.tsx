import { FolderPlus, PlusSquare } from 'lucide-react'
import { Button } from '../ui/button'
import OptionsDropDown from '../ui/optionDropdown.component'

const BasicInfo = ({ children }: { children: JSX.Element }) => {
  return (
    <div className='w-full flex gap-1 p-2 m-1 bg-yellow-200 shadow-md'>
      <div className='w-1/3 flex flex-col gap-1 '>
        <p className='text-lg'>Add your recipe picture :</p>
        <div className=' w-full  bg-yellow-50 flex flex-col p-2 h-96 items-center justify-center'>
          <input type='file' name='addPicture' id='addPicture' hidden={true} />
          <label htmlFor='addPicture'>
            <FolderPlus size={100} strokeWidth={0.5} stroke='gray' />
          </label>
        </div>
        <div className='w-full flex p-2 gap-8 items-center justify-center'>
          <label htmlFor='imgAlt'>Alt of your image: </label>
          <input type='text' name='imgAlt' id='imgAlt' className='bg-gray-100 border-[2px] border-black w-fit' />
        </div>
      </div>
      <div className=' w-2/3 flex flex-col gap-1 p-2'>
        <div className='w-full  flex flex-col p-2'>
          <label htmlFor='imgAlt'>Enter your Recipe Name :</label>
          <input type='text' name='imgAlt' id='imgAlt' className='bg-gray-100 border-[2px] border-black h-8 w-2/3' />
        </div>
        <div className=' flex justify-around items-center p-2'>
          <div>
            <OptionsDropDown
              id='mainCategory'
              optionName={['Select main category', 'sub']}
              options={[
                ['one', 'two', 'three', 'four', 'five'],
                ['one', 'two', 'three', 'four', 'five'],
              ]}
            />
          </div>
          <div className=''>
            <OptionsDropDown
              id='mainCategory'
              optionName={['Select sub category']}
              options={[['one', 'two', 'three', 'four', 'five']]}
            />
          </div>
        </div>
        <div className=' flex flex-col p-2'>
          <label htmlFor='imgAlt'>A short description to your recipe :</label>
          <textarea name='imgAlt' id='imgAlt' cols={30} rows={10} className='border-[2px] border-black'></textarea>
        </div>
        <div className='flex p-1 gap-2 w-full  items-center justify-around'>
          <Button>
            <input type='file' name='addPicture' id='addPicture' hidden={true} />
            <label htmlFor='addPicture' className='flex gap-2 items-center'>
              <FolderPlus />
              <p>Add more recipe images</p>
            </label>
          </Button>
          {children}
        </div>
      </div>
    </div>
  )
}

export default BasicInfo
