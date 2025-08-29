// import React, { useId } from 'react'

// const Input = React.forwardRef(function Input ({
//   label,
//   type="text",
//   className = "",
//   ...props
// }, ref){
//   const id = useId();
//   return (
//     <div className='w-full'>
//       {
//         label && <label 
//         className='inline-block mb-1 pl-1' htmlFor={id}>
//           {label}
//         </label>
//       }
//       <input
//       type={type}
//       className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
//       ref={ref}
//       {...props}
//       id={id}
//        />
//     </div>
//   )
// })

// export default Input

import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  {
    label,
    type = "text",
    className = "",
    error = "",
    helperText = "",
    icon = null, // optional icon (left side)
    ...props
  },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label
          htmlFor={id}
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {/* Optional Icon */}
        {icon && (
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 pointer-events-none">
            {icon}
          </span>
        )}

        {/* Input */}
        <input
          id={id}
          ref={ref}
          type={type}
          className={`w-full px-3 py-2 rounded-lg border transition duration-200 outline-none
            ${icon ? "pl-10" : ""}
            ${
              error
                ? "border-red-500 focus:ring-2 focus:ring-red-400"
                : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
            }
            bg-white text-gray-900 placeholder-gray-400 ${className}`}
          {...props}
        />
      </div>

      {/* Helper Text or Error */}
      {error ? (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      ) : helperText ? (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      ) : null}
    </div>
  );
});

export default Input;
