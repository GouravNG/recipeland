import { IBM_Flex } from '@/utils/fonts'
import { MoveRightIcon } from 'lucide-react'
import Image from 'next/image'
import RecipeContainer from '../ui/recipeContainer.component'
import { RecipeInfo } from '@/types/common.type'
import { getAllRecipes } from '@/dummyData/getAllRecipe'
import QuoteComponent from '../quote.component'

export const ItemAndFeatured = () => {
  const FeaturingData: RecipeInfo[] = []
  FeaturingData.push(getAllRecipes[0])
  FeaturingData.push(getAllRecipes[1])
  FeaturingData.push(getAllRecipes[2])

  return (
    <>
      <div className='flex p-4 m-2 justify-evenly gap-4'>
        <div className='relative border p-2 bg-slate-700 flex items-end justify-center'>
          <Image
            src={FeaturingData[0]?.recipeMainImage}
            alt={FeaturingData[0]?.recipeMainImageAlt}
            height={500}
            width={600}
          />
          <div className='absolute flex flex-col items-center bg-slate-100 m-10 mx-20 p-5 px-10 gap-2 opacity-75 border-4 border-yellow-400'>
            <p className='font-bold text-md text-red-500'>Easy {FeaturingData[0]?.recipeCategory}</p>
            <h1 className={`${IBM_Flex.className} antialiased text-5xl text-center`}>{FeaturingData[0]?.recipeName}</h1>
            <p className='italic'>{FeaturingData[0]?.recipeDescription}</p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-10 '>
          <QuoteComponent />
          <div className='flex items-start '>
            <div className='flex flex-col p-2 gap-2'>
              <div className='flex gap-2 items-center'>
                <h1 className={`${IBM_Flex.className} subHeadingStyle underLineDecoration`}>Trending Recipes</h1>
                <MoveRightIcon />
              </div>
              <div className='flex py-3 gap-20 items-center'>
                {FeaturingData.slice(1, 3).map((i, index) => {
                  return <RecipeContainer recipeInfo={i} key={index} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
