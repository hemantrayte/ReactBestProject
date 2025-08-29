// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { login as authLogin } from '../store/authSlice'
// import { Button, Input, Logo } from './index'
// import { useDispatch } from 'react-redux'
// import authService from '../appwrite/auth'
// import { useForm } from "react-hook-form"


// function Login() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { register, handleSubmit } = useForm();
//   const [error, setError] = useState('')

//   const login = async (data) => {
//     setError("");
//     try {
//       const session = await authService.login(data);
//       if (session) {
//         const userData = await authService.getCurrentUser();
//         if (userData) {
//           dispatch(authLogin(userData));
//           navigate("/");
//         }
//       }
//     } catch (error) {
//       console.log(error)
//       setError(error.message)
//     }
//   }

//   return (
//     <div
//       className='flex items-center justify-center w-full'
//     >
//       <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
//       >
//         <div className='mb-2 flex justify-center'>
//           <span className='inline-block w-full max-w-[100px]'>
//             <Logo width='100%' />
//           </span>
//         </div>
//         <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your account</h2>
//         <p className="mt-2 text-center text-base text-black/60">
//           Don&apos;t have any account?&nbsp;
//           <Link
//             to="/signup"
//             className="font-medium text-primary transition-all duration-200 hover:underline"
//           >
//             Sign Up
//           </Link>
//         </p>
//         {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

//         <form onSubmit={handleSubmit(login)}
//           className='mt-8'>
//           <div className='space-y-5'>
//             <Input
//               label="Email: "
//               placeholder="Enter your email"
//               type="email"
//               {...register("email", {
//                 required: true,
//                 // validate: {
//                 //   matchPatern: (value) => "email address must be a valid"
//                 // }
//               })}
//             />
//             <Input
//               label="Password: "
//               placeholder="Enter your Password"
//               type="password"
//               {...register("password", {
//                 required: true,
//               })}
//             />
//             <Button
//               type='submit'
//               className='w-full'>Sign in</Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (data) => {
    setError("");
    setLoading(true);
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate("/");
        }
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">
      <div className="mx-auto w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-700">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-3xl font-bold text-white">Welcome Back</h2>
        <p className="mt-2 text-center text-base text-gray-400">
          Don’t have an account?&nbsp;
          <Link
            to="/signup"
            className="font-semibold text-blue-400 hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {/* Error Message */}
        {error && (
          <p className="text-red-400 mt-6 text-center font-medium">{error}</p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(login)} className="mt-8 space-y-5">
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            {...register("email", { required: "Email is required" })}
          />

          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            {...register("password", { required: "Password is required" })}
          />

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 ease-in-out"
            isLoading={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
