// import React from 'react'
// import { useDispatch } from 'react-redux'
// import authService from '../../appwrite/auth'
// import { logout } from '../../store/authSlice'

// function LogoutBtn() {
//   const dispatch = useDispatch();

//   const logoutHandler = () => {
//     authService.logout()
//       .then(() => {
//         dispatch(logout());
//       })
//   }
//   return (
//     <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
//       onClick={() => logoutHandler}
//     >Logout</button>
//   )
// }

// export default LogoutBtn
import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      await authService.logout();
      dispatch(logout());
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button
      onClick={logoutHandler}
      className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-white bg-red-600 rounded-full shadow-lg transition-all duration-300 ease-out hover:bg-red-700 hover:scale-105"
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-500 via-pink-500 to-red-600 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
      <span className="relative z-10">Logout</span>
    </button>
  );
}

export default LogoutBtn;
