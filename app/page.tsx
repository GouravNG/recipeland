import BannerImage from '@/components/homepageBlocks/Banner'
import CuratedForYou from '@/components/homepageBlocks/curatedForyou'
import { ItemAndFeatured } from '@/components/homepageBlocks/ItemandFeatured'
import Scroll from '@/components/homepageBlocks/scrolls'

export default function Home() {
  return (
    <>
      <div className='flex flex-col'>
        <ItemAndFeatured />
        <Scroll />
        <CuratedForYou />
        <BannerImage />
      </div>
    </>
  )
}
