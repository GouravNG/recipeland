'use client'
import BasicInfo from '@/components/createRecipeBlocks/basicInfos.component'
import Ingredients from '@/components/createRecipeBlocks/ingredients.component'
import Instructions from '@/components/createRecipeBlocks/instructions.component'
import Misc from '@/components/createRecipeBlocks/misc.component'
import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography.component'
import { createRecipe } from '@/lib/actions/admin.actions'
import { ChevronDown } from 'lucide-react'
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
          <form action={createRecipe} className='w-full px-20'>
            <div
              onClick={() => {
                dispatch({ type: 'TOGGLE_PRIMARY_VIEW' })
              }}
              className='w-full'
            >
              <div className='flex items-center w-fit justify-center'>
                <Typography varient='h3' style='font-bold'>
                  1.Basic info
                </Typography>
                <ChevronDown
                  size={'20px'}
                  className={`${state.isPrimaryInfoView ? '' : 'rotate-90'} transition-all ease-in-out duration-100 `}
                />
              </div>
            </div>
            <div className={`${state.isPrimaryInfoView ? '' : 'hidden'}`}>
              <BasicInfo>
                <NavButton buttonNumber={1} dispatch={dispatch}>
                  Next Section
                </NavButton>
              </BasicInfo>
            </div>
            <div
              onClick={() => {
                dispatch({ type: 'TOGGLE_INGREDIENTS_VIEW' })
              }}
            >
              <div className='flex items-center w-fit justify-center'>
                <Typography varient='h3' style='font-bold'>
                  2.Ingredients
                </Typography>
                <ChevronDown
                  size={'20px'}
                  className={`${state.isIngredientsView ? '' : 'rotate-90'} transition-all ease-in-out duration-100`}
                />
              </div>
            </div>
            <div className={`${state.isIngredientsView ? '' : 'hidden'} `}>
              <Ingredients>
                <NavButton buttonNumber={2} dispatch={dispatch}>
                  Next Section
                </NavButton>
              </Ingredients>
            </div>
            <div
              onClick={() => {
                dispatch({ type: 'TOGGLE_INSTRUCTION_VIEW' })
              }}
            >
              <div className='flex items-center w-fit justify-center'>
                <Typography varient='h3' style='font-bold'>
                  3.Instructions
                </Typography>
                <ChevronDown
                  size={'20px'}
                  className={`${state.isInstructionsView ? '' : 'rotate-90'} transition-all ease-in-out duration-100`}
                />
              </div>
            </div>
            <div className={`${state.isInstructionsView ? '' : 'hidden'} `}>
              <Instructions>
                <NavButton buttonNumber={3} dispatch={dispatch}>
                  Next Section
                </NavButton>
              </Instructions>
            </div>
            <div
              onClick={() => {
                dispatch({ type: 'TOGGLE_MISC_VIEW' })
              }}
              className='w-full'
            >
              <div className='flex items-center w-fit justify-center'>
                <Typography varient='h3' style='font-bold'>
                  4.Other info
                </Typography>
                <ChevronDown
                  size={'20px'}
                  className={`${state.isMiscView ? '' : 'rotate-90'} transition-all ease-in-out duration-100 mt-1`}
                />
              </div>
            </div>
            <div className={`${state.isMiscView ? '' : 'hidden'} `}>
              <Misc />
            </div>
            <div className='w-full flex justify-center p-1 m-1'>
              <Button variant={'default'} type='submit'>
                Submit Your magical Recipe
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

const NavButton = ({
  buttonNumber,
  children,
  dispatch,
}: {
  buttonNumber: number
  children: string
  dispatch: React.Dispatch<{ type: string }>
}) => {
  const handleClick = (i: number) => {
    switch (i) {
      case 1:
        dispatch({ type: 'TOGGLE_PRIMARY_VIEW' })
        dispatch({ type: 'TOGGLE_INGREDIENTS_VIEW' })
        break
      case 2:
        dispatch({ type: 'TOGGLE_INGREDIENTS_VIEW' })
        dispatch({ type: 'TOGGLE_INSTRUCTION_VIEW' })
        break
      case 3:
        dispatch({ type: 'TOGGLE_INSTRUCTION_VIEW' })
        dispatch({ type: 'TOGGLE_MISC_VIEW' })
        break
      case 4:
        dispatch({ type: 'TOGGLE_MISC_VIEW' })
        break
    }
  }
  return (
    <Button
      onClick={(e) => {
        e.preventDefault()
        handleClick(buttonNumber)
      }}
    >
      {children}
    </Button>
  )
}
export default CreateRecipeForm
