import React from 'react';

const Button = ({
    variant = 'primary',
    size = 'md',
    children,
    fullWidth,
    className = '',
    ...props
}) => {
    const baseClasses = 'font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variantClasses = {
        primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
        secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500',
        outline: 'border border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
        text: 'text-primary-600 hover:text-primary-700 hover:bg-primary-50 focus:ring-primary-500',
    };

    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    const widthClass = fullWidth ? 'w-full' : '';

    const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

    return (
        <button className={buttonClasses} {...props}>
            {children}
        </button>
    );
};

export default Button;
