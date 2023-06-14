// Import React library
import React from 'react'

// FormField is a generic form field component that supports select and input field types
const FormField = ({
  labelName, // label for the field
  type, // type of the field (select or input)
  name, // name of the field
  placeholder, // placeholder text for the field
  value, // current value of the field
  handleChange, // function to be called when the field value changes
  isSurpriseMe, // flag to determine if the surprise me option is needed
  handleSurpriseMe, // function to be called when surprise me is clicked
  options // options for the select field type
}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label
          htmlFor={name}
          className='block text-sm font-medium text-grey-900'
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type='button'
            onClick={handleSurpriseMe} // handle click event
            className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black'
          >
            Examples from our community
          </button>
        )}
      </div>

      {type === 'select' ? ( // check if field type is select
        <select
          id={name}
          name={name}
          className='bg-gray-60 border border-gray-300 text-gray-900
          ext-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff]
          outline-none block w-full p-3'
          value={value} // current value
          onChange={handleChange} // handle change event
          required
        >
          <option value='' disabled>{placeholder}</option>
          {options.map((option, index) => ( // map through options and create option elements
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type} // field type
          id={name}
          name={name}
          className='bg-gray-60 border boder-gray-300 text-gray-900
          text-sm rounded-lg focus:bg-white focus:ring-[#4649ff] focus:border-[#4649ff] 
          outline-none block w-full p-3'
          placeholder={placeholder} // placeholder text
          value={value} // current value
          onChange={handleChange} // handle change event
          required
        />
      )}
    </div>
  )
}

// Export FormField component
export default FormField
