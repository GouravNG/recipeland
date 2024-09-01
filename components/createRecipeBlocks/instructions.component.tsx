import { useState } from 'react'
import { Button } from '../ui/button'

const Instructions = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState<number>(1)
  return (
    <div className=' p-1'>
      <p className=' text-xl p-1'>Add Step</p>
      <ol className='bg-yellow-100 w-full flex flex-col gap-2 items-center justify-between p-1'>
        {Array.from({ length: step }).map((_, index) => {
          return (
            <div className='w-full' key={index}>
              <p className='w-full'>{` Step: ${index + 1}`}</p>
              <li className='w-full flex gap-1 '>
                <input
                  type='text'
                  className='bg-yellow-50 w-11/12 p-1 outline-none border-b-2 border-black'
                  name={'Step_' + index}
                  id={'Step_' + index}
                />
                <Button
                  className='w-1/12'
                  onClick={(e) => {
                    console.log('need to handle this click')
                    e.preventDefault()
                  }}
                >
                  Add img
                </Button>
                <Button
                  className='w-1/12'
                  onClick={(e) => {
                    setStep(step + 1)
                    e.preventDefault()
                  }}
                >
                  Next Step
                </Button>
              </li>
            </div>
          )
        })}
      </ol>
      <div className='flex justify-end p-1'>{children}</div>
    </div>
  )
}

export default Instructions
