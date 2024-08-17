import { IBM_Flex } from '@/utils/fonts'
import { Star, StarHalfIcon } from 'lucide-react'
import Image from 'next/image'

const RDPHeader = () => {
  return (
    <>
      <div className='flex p-4 py-8 items-center justify-around'>
        <div className='flex flex-col gap-3 p-4 items-center'>
          <h1 className={`${IBM_Flex.className} text-6xl p-4`}>Straberry Cheese Cake</h1>
          <p>A short description about my tasty cheese cake</p>
          <h3 className='text-slate-600 '>By Gourav Gunaga</h3>
          <h5 className='text-slate-400'>August 17,2024</h5>
          <div className='flex gap-2'>
            <h2>4.6</h2>
            <Star fill='true' />
            <Star fill='true' />
            <Star fill='true' />
            <Star fill='true' />
            <StarHalfIcon fill='true' />
            <div>
              <p>(14)</p>
            </div>
          </div>
        </div>
        <div>
          <Image src='/cheese.jpg' height={300} width={600} alt='Cheese cake' />
        </div>
      </div>
    </>
  )
}
export default RDPHeader
