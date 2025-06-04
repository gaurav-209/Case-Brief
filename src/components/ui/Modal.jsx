import React, { useState, useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import Button from './Button'

const Modal = ({ isOpen, OnClose, title, children, size = 'md', footer }) => {
  const modalRef = useRef(null)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        OnClose()
      }
    }

    const handleClickOutsite = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        OnClose()
      }

      if (isOpen) {
        document.addEventListener('keydown', handleEscape)
        document.addEventListener('mousedown', handleClickOutsite)
        document.body.style.overflow = 'hidden'
      }

      return () => {
        document.addEventListener('keydown', handleEscape)
        document.addEventListener('mousedown', handleClickOutsite)
        document.body.style.overflow = ''
      }
    }
  }, [isOpen, OnClose])

  if (!isOpen) return null

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4'>
      <div
        ref={modalRef}
        className={`bg-white rounded-lg shadow-lg w-full${sizeClasses[size]} max-h-[90vh] flex flex-col`}
      >
        <div className='px-6 py-4 border border-gray-200 flex justify-between items-center'>
          <h2 className='text-xl font-semibold text-gray-800'>{title}</h2>
          <button
            onClick={OnClose}
            className="text-gray-400 hover:text-gray-600 focus:outline-none"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
        <div className='px-6 py-4 overflow-y-auto'>{children}</div>
        {footer && (
          <div className='px-6 py-4 border-t border-gray-200 flex justify-end space-x-2'>{footer}</div>
        )}
      </div>
    </div>
  )
}

export default Modal
