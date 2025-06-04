import React from 'react'

const Input = ({
    label,
    error,
    fullWidth,
    className,
    id,
    ...props
}) => {

    const widthClass = fullWidth ? 'w-full' : '';
    const errorClass = error ? 'border-error-500 focus:border-error-500 focus:ring-error-500'
        : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'

    return (
        <div className={`${widthClass} ${className}`}>
            {label && (
                <label htmlFor={id} className='block text-sm font-medium text-gray-700 mb-1'>
                    {label}
                </label>
            )}

            <input 
            id={id} 
            className={`rounded-md shadow-sm border py-2 px-3 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${errorClass} ${widthClass}`}
            />
            {error && <p className='mt-1 text-sm text-error-500'>{error}</p>}
        </div>
    )
}

export default Input
