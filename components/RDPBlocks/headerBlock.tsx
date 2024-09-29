import { RecipeDetails } from '@/types/common.type'
import { IBM_Flex } from '@/utils/fonts'
import { Star, StarHalfIcon } from 'lucide-react'
import Image from 'next/image'
import GetMeStars from '../ui/getMeStarts.component'

type RDPHeaderProps = {
  RDPInfo: RecipeDetails
}

const RDPHeader: React.FC<RDPHeaderProps> = ({ RDPInfo }) => {
  return (
    <>
      <div className='flex p-4 py-8 items-center justify-around'>
        <div className='flex flex-col gap-3 p-4 items-center'>
          <h1 className={`${IBM_Flex.className} text-6xl p-4`}>{RDPInfo.recipename}</h1>
          <p>{RDPInfo.recipedescription}</p>
          <h3 className='text-slate-600 '>By {`Gourav Gunaga`}</h3>
          <h5 className='text-slate-400'>{`August 17,2024`}</h5>
          <div className='flex gap-2'>
            <GetMeStars stars={3.4} count={23} />
          </div>
        </div>
        <div>
          <Image src={RDPInfo.recipemainimage} height={300} width={600} alt='Cheese cake' />
        </div>
      </div>
    </>
  )
}
export default RDPHeader
