import { Button } from './ui/button'
import merchData from '@/dummyData/merch'
import DropDown from './dropdown.component'
import { SearchIcon } from 'lucide-react'
import { DMS } from '@/utils/fonts'

const Header = () => {
  return (
    <>
      <header className='shadow-md'>
        <div className='flex items-center justify-end'>
          <Button variant={'ghost'}>SIGN UP</Button>
          <Button variant={'ghost'}>NEWSLETTER </Button>
        </div>
        <div className='flex items-center justify-center p-2'>
          <h1 className={`${DMS.className} text-red-600 text-6xl`}>Recipe Land</h1>
        </div>
        <div className='flex items-center justify-evenly'>
          <DropDown dropDonwData={merchData} />
          <div className='flex items-center gap-2 border-[1px] border-slate-900 p-2'>
            <SearchIcon />
            <input
              type='text'
              name='search'
              id='search'
              placeholder={'Search your recipe...'}
              className='outline-none p-1 '
            />
          </div>
        </div>
      </header>
    </>
  )
}
export default Header
