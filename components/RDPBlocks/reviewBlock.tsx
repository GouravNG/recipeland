import { IBM_Flex } from '@/utils/fonts'
import { Star, StarHalfIcon, UserIcon } from 'lucide-react'
import GetMeStars from '../ui/getMeStarts.component'

const ReviewBlock = () => {
  return (
    <>
      <div className='flex flex-col gap-2'>
        <h1 className={`${IBM_Flex.className} subHeadingStyle underLineDecoration py-3`}>Reviews</h1>
        <div className='flex flex-col items-start p-4 gap-3 shadow-xl m-2 w-96'>
          <div className='flex'>
            <div>
              <UserIcon />
            </div>
            <div>User name</div>
          </div>
          <div className='flex gap-2'>
            <GetMeStars stars={5} />
          </div>
          <div>
            <p className='w-90'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ullam recusandae quia blanditiis a
              aspernatur. Voluptatum quas ipsum impedit fuga veritatis sapiente vero esse consectetur iusto deserunt.
              Minima, sequi aperiam?
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default ReviewBlock
