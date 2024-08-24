import { Star, StarHalfIcon } from 'lucide-react'

type GetMeStarsPropes = {
  stars: number
  count?: number
}

const getStarsArray = (stars: number) => {
  const intPart = Math.floor(stars)
  const isDecimal = stars % 1
  const starArray = []

  for (let i = 0; i < intPart; i++) {
    starArray.push(<Star strokeWidth={'.5px'} key={starArray.length} fill='gold' />)
  }
  if (starArray.length === 5) return starArray
  isDecimal
    ? starArray.push(<StarHalfIcon strokeWidth={'.5px'} fill='gold' key={starArray.length} />)
    : starArray.push(<Star strokeWidth={'.5px'} fill='grey' key={starArray.length} />) //4
  const remaining = starArray.length
  for (let i = 0; i < 5 - remaining; i++) {
    starArray.push(<Star fill='grey' strokeWidth={'.5px'} key={starArray.length} />)
  }
  return starArray
}

const GetMeStars: React.FC<GetMeStarsPropes> = ({ stars, count }) => {
  return (
    <>
      <h2 className='font-bold'>{stars}</h2>
      {getStarsArray(stars)}
      {count && <p>({count})</p>}
    </>
  )
}
export default GetMeStars
