import React from 'react'

const Card = ({
    children,
    className = '',
    hover
}) => {
    const baseClasses = 'bg-white rounded-lg shadow-card p-6'
    const hoverClasses = hover ? 'transition-shadow duration-300 hover:shadow-card-hover' : ''

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  )
}

export default Card
