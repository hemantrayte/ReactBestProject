// import React, {useId} from 'react'

// function Select({
//   options,
//   label,
//   classname = "",
//   ...props
// }, ref) {
//   const id = useId();
//   return (
//     <div className='w-full'>
//       { label && <label htmlFor={id} className=''></label>}
//       <select
//       {...props}
//       id={id}
//       ref={ref}
//       className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${classname}`}
//       >
//         {options?.map((option) => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//     </div>
//   )
// }

// export default React.forwardRef(Select)

import React, { useId } from "react";

function Select(
  { options, label, className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-gray-800 border border-gray-300 w-full shadow-sm outline-none 
          focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
          hover:border-blue-300 transition-all duration-200 ${className}`}
      >
        {options?.map((option, i) => (
          <option key={i} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
