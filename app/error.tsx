'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const ErrorPage = () => {
  const { back } = useRouter()
  const hanldeClick = () => {
    back()
  }
  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <h1 className='text-[4rem] font-sans font-bold '>500</h1>
      <div className='p-4'>
        <Image src={'/500.jpg'} alt='Kitchen burning' width={300} height={200} />
      </div>
      <h3>hmmm.... we burned something, plese wait while we fix the issue </h3>
      <Button onClick={hanldeClick}>Back</Button>
    </div>
  )
}

export default ErrorPage
