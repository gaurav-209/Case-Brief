import React from 'react'

const Select = ({
    id,
    label,
    options,
    error,
    fullWidth,
    className,
    ...props
}) => {

    const widthClass = fullWidth ? 'w-full':''
    const errorClass = error ? 'border-error-500 focus:border-error-500 focus:ring-error-500'
     : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'

    return (
    <div className={`${widthClass} ${className}`}>
      {label && (
        <label htmlFor={id} className='block font-medium text-sm text-gray-700 mb-1'>
            {label}
        </label>
      )}
      <select
      id={id}
      className={`rounded-md shadow-sm border py-2 px-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${widthClass} ${errorClass} bg-white`}
      {...props}
      >
        {options.map((option)=>(
            <option value={option.value} key={option.value}>
                {option.label}
            </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-error-500">{error}</p>}
    </div>
  )
}

export default Select
