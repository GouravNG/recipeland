import { DMS } from '@/utils/fonts'
import Link from 'next/link'

const Logo = ({ logoText }: { logoText: string }) => {
  return (
    <>
      <h1 className={`${DMS.className} text-red-600 text-6xl`}>
        <Link href={'/'}>{logoText}</Link>
      </h1>
    </>
  )
}
export default Logo
