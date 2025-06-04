import React from 'react'

const Table = ({
    headers = [],
    children,
    className
}) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className='min--w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            {headers.map((header,index)=>(
              <th
              key={index}
              scope='col'
              className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider
              '>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {children}
        </tbody>
      </table>
    </div>
  )
}

export const TableRow = ({children, onClick , className}) =>{
  const rowClasses = onClick ? `cursor-pointer hover:bg-gray-50 ${className}` : className

  return (
    <tr className={rowClasses} onClick={onClick}>
      {children}
    </tr>
  )
}

export const TableCell = ({children,className}) => {
  return(
    <td className={`px-6 py-4 whitespace-nowrap ${className}`}>
      {children}
    </td>
  )
}

export default Table
