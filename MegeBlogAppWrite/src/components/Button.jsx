// import React from 'react'

// function Button({
//   children,
//   type= 'button',
//   bgColor='bg-blue-600',
//   textColor = 'text-white',
//   className= '',
//   ...props
// }) {
//   return (
//    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
//     {children}
//    </button>
//   )
// }

// export default Button

import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  size = "md", // sm | md | lg
  variant = "solid", // solid | outline | ghost
  isLoading = false,
  disabled = false,
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantStyles = {
    solid: `${bgColor} ${textColor} hover:scale-105 shadow-md hover:shadow-lg`,
    outline: `border border-current ${textColor} bg-transparent hover:bg-gray-100 hover:text-gray-900`,
    ghost: `bg-transparent ${textColor} hover:bg-gray-200/30`,
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
