import React from 'react'
import { Button } from '../ui/button'

const UtilityComponent = () => {
  return (
    <>
      <div className='p-2 w-96 flex flex-col gap-2 items-center'>
        <h3>Download the Recipe</h3>
        <Button>Print</Button>
      </div>
    </>
  )
}

export default UtilityComponent
