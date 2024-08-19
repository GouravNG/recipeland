import { BannerImageLink_HomePage } from '@/website.properties'
import Image from 'next/image'

const BannerImage = () => {
  return (
    <>
      <div className='flex items-center justify-center my-1 py-2'>
        <Image
          src={BannerImageLink_HomePage.imgLink}
          alt={BannerImageLink_HomePage.altText}
          width={1500}
          height={100}
        />
      </div>
    </>
  )
}
export default BannerImage
