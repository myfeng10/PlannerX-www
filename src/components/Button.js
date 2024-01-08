import React from 'react';

const Button = ({ onClick, label, variant = 'primary', children,size = 'md' }) => {
    const baseClasses = "inline-flex justify-center items-center text-base font-medium text-center rounded-lg focus:ring-4";

    const sizeClasses = {
        sm: 'px-2 py-1 text-base', 
        md: 'px-5 py-2 text-base', 
        lg: 'px-6 py-4 text-lg',
    };


    const variantClasses = {
        primary: "bg-red-button hover:bg-red-button-dark text-white focus:ring-red-button-light",
        secondary: "border border-white hover:bg-gray-100 focus:ring-gray-400 text-white hover:text-black",
        Action: "bg-orange-button hover:bg-yellow-orange-dark text-black focus:ring-orange-button-light",
        Action_: "bg-yellow-button hover:bg-yellow-yellow-dark text-black focus:ring-yellow-button-light",
    };

    return (
        <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}>
            {label}
            {children}
        </button>
    );
};

export default Button;