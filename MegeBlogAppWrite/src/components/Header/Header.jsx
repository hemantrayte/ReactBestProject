// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Link, useNavigate } from 'react-router-dom'
// import { Container, Logo, LogoutBtn } from "../index"

// function Header() {
//   const authStatus = useSelector((state) => state.auth.status)
//   const navigate = useNavigate()

//   const navItems = [
//     {
//       name: 'Home',
//       slug: "/",
//       active: true
//     },
//     {
//       name: "Login",
//       slug: "/login",
//       active: !authStatus,
//     },
//     {
//       name: "Signup",
//       slug: "/signup",
//       active: !authStatus,
//     },
//     {
//       name: "All Posts",
//       slug: "/all-posts",
//       active: authStatus,
//     },
//     {
//       name: "Add Post",
//       slug: "/add-post",
//       active: authStatus,
//     },
//   ]


//   return (
//     <header className='py-3 shadow bg-gray-500'>
//       <Container>
//         <nav className='flex'>
//           <div className='mr-4'>
//             <Link to='/'>
//               <Logo width='70px' />
//             </Link>
//           </div>
//           <ul className='flex ml-auto'>
//             {navItems.map((item) =>
//               item.active ? (
//                 <li key={item.name}>
//                   <button
//                     onClick={() => navigate(item.slug)}
//                     className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
//                   >{item.name}</button>
//                 </li>
//               ) : null
//             )}
//             {authStatus && (
//               <li>
//                 <LogoutBtn />
//               </li>
//             )}
//           </ul>
//         </nav>
//       </Container>
//     </header>
//   )
// }

// export default Header

import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Container, Logo, LogoutBtn } from "../index";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
      <Container>
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Logo width="70px" />
            <span className="text-lg font-bold text-white hidden sm:block">MyBlog</span>
          </Link>

          {/* Navigation Items */}
          <ul className="flex items-center gap-4 ml-auto">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="relative inline-block px-5 py-2 text-sm font-medium text-gray-200 rounded-full transition-all duration-300 hover:text-white hover:bg-blue-600/20 hover:scale-105"
                    >
                      {item.name}
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 scale-x-0 transition-transform duration-300 origin-center hover:scale-x-100"></span>
                    </button>
                  </li>
                )
            )}
            {/* Logout Button */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
