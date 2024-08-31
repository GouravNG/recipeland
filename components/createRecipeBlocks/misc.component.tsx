const Misc = () => {
  return (
    <div className=' h-40 flex p-1 w-full justify-around items-center '>
      <div className=' bg-yellow-200 flex flex-col h-full justify-around items-center p-1 border rounded-md shadow-md'>
        <label htmlFor='' className='text-3xl font-bold'>
          Servings
        </label>
        <input
          type='text'
          name=''
          id=''
          className='outline-none border-b-2 border-black bg-transparent text-center w-1/2 text-xl'
          placeholder="Persons"
        />
      </div>
      <div className=' bg-yellow-200 flex flex-col h-full justify-around items-center p-2 border rounded-md shadow-md'>
        <label htmlFor='' className='text-3xl font-bold'>
          Preperation Time
        </label>
        <input
          type='text'
          name=''
          id=''
          className='outline-none border-b-2 border-black bg-transparent text-center w-1/2 text-xl'
          placeholder="Min/Hr"
        />
      </div>
      <div className=' bg-yellow-200 flex flex-col h-full justify-around items-center p-1 border rounded-md shadow-md'>
        <label htmlFor='' className='text-3xl font-bold'>
          Cooking Time
        </label>
        <input
          type='text'
          name=''
          id=''
          className='outline-none border-b-2 border-black bg-transparent text-center w-1/2 text-xl'
          placeholder="Min/Hr"
        />
      </div>
    </div>
  )
}

export default Misc
