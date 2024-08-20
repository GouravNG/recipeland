import { sofia } from '@/utils/fonts'
import { dailyQuotes } from '@/website.properties'

const QuoteComponent = () => {
  const quote: string = dailyQuotes[Math.floor(Math.random() * dailyQuotes.length)]
  return <q className={`${sofia.className} font-bold text-[1.45rem] text-center w-96`}>{quote}</q>
}

export default QuoteComponent
