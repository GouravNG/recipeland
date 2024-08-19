import Link from 'next/link'

type MerchListProps = {
  listProps: string
}

const MerchList: React.FC<MerchListProps> = ({ listProps }) => {
  const handleClick = (linkName: string) => {
    return `/category/${linkName}`
  }

  return (
    <li className='flex flex-col p-1 hover:font-semibold'>
      <Link href={handleClick(listProps)} title={handleClick(listProps)}>
        {listProps}
      </Link>
    </li>
  )
}

export default MerchList
