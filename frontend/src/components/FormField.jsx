import React from 'react'

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
  options
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
            onClick={handleSurpriseMe}
            className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black'
          >
            Examples from our community
          </button>
        )}
      </div>

      {type === 'select' ? (
        <select
          id={name}
          name={name}
          className='bg-gray-50 border border-gray-300 text-gray-900
          ext-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff]
          outline-none block w-full p-3'
          value={value}
          onChange={handleChange}
          required
        >
          <option value='' disabled>{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          className='bg-gray-50 border boder-gray-300 text-gray-900
          text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff]
          outline-none block w-full p-3'
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
        />
      )}
    </div>
  )
}

export default FormField