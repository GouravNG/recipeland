import Typography from '../ui/typography.component'

type IngredientsProps = {
  ingredinets: string[]
}
const Ingredients: React.FC<IngredientsProps> = ({ ingredinets }) => {
  return (
    <>
      <div className='p-2'>
        <Typography varient='h1'>Ingredients</Typography>
        <ul className='text-xl px-6'>
          {ingredinets?.map((i, index) => {
            return (
              <li key={index} className='list-disc text-lg line py-1'>
                {i}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
export default Ingredients
