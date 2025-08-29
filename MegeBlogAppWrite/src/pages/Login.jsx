// import React from 'react'
// import { Login as LoginComponents } from '../components'

// function Login() {
//   return (
//     <div className='py-8'>
//       <LoginComponents />
//     </div>
//   )
// }

// export default Login
import React from "react";
import { Login as LoginComponent } from "../components";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <LoginComponent />
      </div>
    </div>
  );
}

export default Login;
