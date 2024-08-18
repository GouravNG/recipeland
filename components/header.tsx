import merchData from '@/dummyData/merch'
import DropDown from './dropdown.component'
import HeaderButtons from './ui/headerButtons.component'
import Logo from './ui/logo.component'
import { headerButtons, logo } from '@/website.properties'
import SearchBar from './ui/searchBar.component'

const Header = () => {
  return (
    <>
      <header className='shadow-md'>
        <HeaderButtons headerButtons={headerButtons} varient={'ghost'} />
        <div className='flex items-center justify-center p-2'>
          <Logo logoText={logo} />
        </div>
        <div className='flex items-center justify-evenly'>
          <DropDown dropDonwData={merchData} />
          <SearchBar />
        </div>
      </header>
    </>
  )
}
export default Header
