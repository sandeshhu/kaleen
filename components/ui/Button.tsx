import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-all duration-300 focus:outline-none active:scale-95";
  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-800 rounded-sm hover:shadow-lg",
    secondary: "bg-white text-gray-900 border border-gray-200 hover:border-gray-900 hover:bg-gray-50 rounded-sm",
    outline: "bg-transparent text-white border border-white hover:bg-white hover:text-gray-900 rounded-sm"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;