import StepsOfRecipe from './RDPBlocks/stepsOfRecipe'
import Typography from './ui/typography.component'

type RecipeStepsProps = {
  recipeSteps: string[]
}

const RecipeSteps: React.FC<RecipeStepsProps> = ({ recipeSteps }) => {
  return (
    <>
      <div className='p-2'>
        <Typography varient='h1'>Steps to cook </Typography>
        {recipeSteps?.map((i, index) => {
          return <StepsOfRecipe key={index} stepCount={index + 1} stepDesc={i} />
        })}
      </div>
    </>
  )
}

export default RecipeSteps
