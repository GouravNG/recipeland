type OptionDropDownType = {
  options: string[][]
  id: string
  name?: string
  optionName: string[]
}
const OptionsDropDown: React.FC<OptionDropDownType> = ({ options, id, name = id, optionName }) => {
  return (
    <select name={name} id={id} className='p-2 bg-white rounded-md'>
      {options.map((optionGrp, index) => {
        return (
          <optgroup key={index} className='bg-white'>
            <option key={index + 1}>-- {optionName[index]} --</option>
            {optionGrp.map((option, index) => {
              return (
                <option value={option} key={index}>
                  {option}
                </option>
              )
            })}
          </optgroup>
        )
      })}
    </select>
  )
}

export default OptionsDropDown
