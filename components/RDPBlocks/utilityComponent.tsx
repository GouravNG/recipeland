import React from 'react'
import { Button } from '../ui/button'
import { Printer } from 'lucide-react'

const UtilityComponent = () => {
  return (
    <>
      <div className='flex flex-col justify-center gap-1'>
        <h3>Download the Recipe</h3>
        <Button className='flex gap-2'>
          <Printer />
          Print
        </Button>
      </div>
    </>
  )
}

export default UtilityComponent
