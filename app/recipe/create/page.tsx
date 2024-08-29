'use client'
import BasicInfo from '@/components/createRecipeBlocks/basicInfos.component'
import Ingredients from '@/components/createRecipeBlocks/ingredients.component'
import Instructions from '@/components/createRecipeBlocks/instructions.component'
import Misc from '@/components/createRecipeBlocks/misc.component'
import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography.component'
import { useReducer } from 'react'

type ToggleViewTypes = {
  isPrimaryInfoView: boolean
  isIngredientsView: boolean
  isInstructionsView: boolean
  isMiscView: boolean
}

const toggleViews: ToggleViewTypes = {
  isPrimaryInfoView: true,
  isIngredientsView: false,
  isInstructionsView: false,
  isMiscView: false,
}

const reducerFn = (state: ToggleViewTypes, action: { type: string }) => {
  switch (action.type) {
    case 'TOGGLE_PRIMARY_VIEW':
      return { ...state, isPrimaryInfoView: !state.isPrimaryInfoView }
    case 'TOGGLE_INGREDIENTS_VIEW':
      return { ...state, isIngredientsView: !state.isIngredientsView }
    case 'TOGGLE_INSTRUCTION_VIEW':
      return { ...state, isInstructionsView: !state.isInstructionsView }
    case 'TOGGLE_MISC_VIEW':
      return { ...state, isMiscView: !state.isMiscView }
    default:
      return state
  }
}

const CreateRecipeForm = () => {
  const [state, dispatch] = useReducer(reducerFn, toggleViews)
  return (
    <>
      <div className='w-full flex flex-col items-center'>
        <Typography varient='h1'>Post Your Tasty Recipe</Typography>
        <div className='flex flex-col items-start justify-center w-full px-5'>
          <form action='' className='w-full px-20'>
            <div
              onClick={() => {
                dispatch({ type: 'TOGGLE_PRIMARY_VIEW' })
              }}
              className='w-full'
            >
              <Typography varient='h3' style='font-bold'>
                Basic info
              </Typography>
            </div>
            {state.isPrimaryInfoView && <BasicInfo />}

            <div
              onClick={() => {
                dispatch({ type: 'TOGGLE_INGREDIENTS_VIEW' })
              }}
            >
              <Typography varient='h3' style='font-bold'>
                Ingredients
              </Typography>
            </div>
            {state.isIngredientsView && <Ingredients />}
            <div
              onClick={() => {
                dispatch({ type: 'TOGGLE_INSTRUCTION_VIEW' })
              }}
            >
              <Typography varient='h3' style='font-bold'>
                Instructions
              </Typography>
            </div>
            {state.isInstructionsView && <Instructions />}
            <div
              onClick={() => {
                dispatch({ type: 'TOGGLE_MISC_VIEW' })
              }}
              className='w-full'
            >
              <Typography varient='h3' style='font-bold'>
                Other info
              </Typography>
            </div>
            {state.isMiscView && <Misc />}
          </form>
        </div>
        <div className='p-1 m-1'>
          <Button variant={'default'}> Submit Your magical Recipe</Button>
        </div>
      </div>
    </>
  )
}
export default CreateRecipeForm
