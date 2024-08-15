import Image from 'next/image'

const BannerImage = () => {
  return (
    <>
      <div className='flex items-center justify-center my-1 py-2'>
        <Image src={'/banner2.jpg'} alt='BannerImage' width={1500} height={100} />
      </div>
    </>
  )
}
export default BannerImage
