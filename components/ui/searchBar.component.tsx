'use client'
import { SearchIcon } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

const SearchBar: React.FC = () => {
  const searchParam = useSearchParams()
  const { replace } = useRouter()

  const handleSearch = (term: string) => {
    const searchURL = new URLSearchParams(searchParam)
    term ? searchURL.set('query', term) : searchURL.delete('query')
    replace(`/search?${searchURL.toString()}`)
  }

  return (
    <>
      <div className='flex items-center gap-2 border-[1px] border-slate-900 p-2'>
        <SearchIcon />
        <input
          type='text'
          name='search'
          id='search'
          placeholder={`Search your recipes...`}
          className='outline-none p-1'
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParam.get('query')?.toString()}
        />
      </div>
    </>
  )
}

export default SearchBar
