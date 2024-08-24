type StepsOfRecipeProps = {
  stepCount: number
  stepDesc: string
}

const StepsOfRecipe: React.FC<StepsOfRecipeProps> = ({ stepCount, stepDesc }) => {
  return (
    <>
      <div className='p-2'>
        <h3 className='font-bold text-xl'>Step:{stepCount}</h3>
        <p>{stepDesc}</p>
      </div>
    </>
  )
}
export default StepsOfRecipe
