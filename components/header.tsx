import DropDown from './dropdown.component'
import HeaderButtons from './ui/headerButtons.component'
import Logo from './ui/logo.component'
import { headerButtons, logo } from '@/website.properties'
import SearchBar from './ui/searchBar.component'
import { Menu } from 'lucide-react'

const Header = () => {
  return (
    <>
      <header className='shadow-md w-full pb-2'>
        <div className='flex flex-row-reverse items-center justify-between'>
          <HeaderButtons headerButtons={headerButtons} varient={'ghost'} />
          <Menu size={40} className='md:hidden p-2' />
        </div>
        <div className='flex items-center justify-center p-2'>
          <Logo logoText={logo} />
        </div>
        <div className='flex md:flex-row items-center justify-evenly'>
          <DropDown />
          <SearchBar />
        </div>
      </header>
    </>
  )
}
export default Header
