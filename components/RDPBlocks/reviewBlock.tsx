import { Star, StarHalfIcon, UserIcon } from 'lucide-react'

const ReviewBlock = () => {
  return (
    <>
      <div className='flex flex-col gap-2'>
        <h1 className='bg-black text-white text-2xl p-1 py-2'>Reviews</h1>
        <div className='flex flex-col items-start p-4 gap-3 shadow-xl m-2 w-96'>
          <div className='flex'>
            <div>
              <UserIcon />
            </div>
            <div>User name</div>
          </div>
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
