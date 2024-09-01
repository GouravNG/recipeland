import { useState } from 'react'
import { Button } from '../ui/button'

const Ingredients = ({ children }: { children: React.ReactNode }) => {
  const [item, SetItem] = useState<number>(1)
  return (
    <div className='flex flex-col items-center justify-center p-2 w-full gap-2'>
      <table className='flex flex-col gap-3  border-[2px] border-black m-1 w-2/3'>
        <thead className='bg-orange-100 w-full'>
          <tr className='flex gap-2 w-full justify-around border-b-2 border-slate-600'>
            <th className='w-1/3 text-center pl-2'>Name</th>
            <th className='w-1/3 text-center pl-2'>Measurement</th>
            <th className='w-1/3 text-center pl-2'>Qunatity</th>
          </tr>
        </thead>
        <tbody className='pb-2 w-full'>
          {Array.from({ length: item }).map((_, index) => {
            return (
              <tr className='w-full flex justify-around items-center' key={index}>
                <td className='w-1/3'>
                  <input
                    type='text'
                    className='w-full outline-none pb-1 text-center'
                    id={'indgridientName_' + index}
                    name={'indgridientName_' + index}
                    placeholder='Enter ingredient'
                  />
                </td>
                <td className='w-1/3 flex justify-center items-center'>
                  <select className='p-1 mb-1 bg-white text-center' id='measurement' name='measurement'>
                    <option>Tea Spoon</option>
                    <option>TableSpoon</option>
                    <option>Pack</option>
                    <option>grams</option>
                    <option>counts</option>
                  </select>
                </td>
                <td className='w-1/3'>
                  <input
                    type='text'
                    className='w-full outline-none pb-1 placeholder text-center'
                    id={'quantity_' + index}
                    name={'quantity_' + index}
                    placeholder='mg/g/kg'
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='flex w-2/3 gap-2 justify-end items-center px-10'>
        <Button
          onClick={(e) => {
            SetItem(item + 1)
            e.preventDefault()
          }}
        >
          Next Item
        </Button>
        {children}
      </div>
    </div>
  )
}

export default Ingredients
