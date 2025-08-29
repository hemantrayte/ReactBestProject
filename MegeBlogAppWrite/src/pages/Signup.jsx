// import React from 'react'
// import { Signup as SignupComponents } from '../components'

// const Signup = () => {
//   return (
//     <div className='py-8'>
//       <SignupComponents />
//     </div>
//   )
// }

// export default Signup

import React from "react";
import { Signup as SignupComponent } from "../components";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <SignupComponent />
      </div>
    </div>
  );
};

export default Signup;
