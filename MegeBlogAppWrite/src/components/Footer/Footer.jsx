// import React from 'react'
// import { Link } from 'react-router-dom'
// import {Logo} from '../index'



// function Footer() {
//   return (
//     <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
//             <div className="relative z-10 mx-auto max-w-7xl px-4">
//                 <div className="-m-6 flex flex-wrap">
//                     <div className="w-full p-6 md:w-1/2 lg:w-5/12">
//                         <div className="flex h-full flex-col justify-between">
//                             <div className="mb-4 inline-flex items-center">
//                                 <Logo width="100px" />
//                             </div>
//                             <div>
//                                 <p className="text-sm text-gray-600">
//                                     &copy; Copyright 2023. All Rights Reserved by DevUI.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="w-full p-6 md:w-1/2 lg:w-2/12">
//                         <div className="h-full">
//                             <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//                                 Company
//                             </h3>
//                             <ul>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Features
//                                     </Link>
//                                 </li>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Pricing
//                                     </Link>
//                                 </li>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Affiliate Program
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Press Kit
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="w-full p-6 md:w-1/2 lg:w-2/12">
//                         <div className="h-full">
//                             <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//                                 Support
//                             </h3>
//                             <ul>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Account
//                                     </Link>
//                                 </li>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Help
//                                     </Link>
//                                 </li>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Contact Us
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Customer Support
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="w-full p-6 md:w-1/2 lg:w-3/12">
//                         <div className="h-full">
//                             <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//                                 Legals
//                             </h3>
//                             <ul>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Terms &amp; Conditions
//                                     </Link>
//                                 </li>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Privacy Policy
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Licensing
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//   )
// }

// export default Footer

import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../index";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap -m-6">
          {/* Logo + CopyRight */}
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-6 flex items-center gap-3">
                <Logo width="120px" />
                <span className="text-lg font-bold text-white">MyBlog</span>
              </div>
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} All Rights Reserved | Crafted with ❤️ by DevUI
              </p>
            </div>
          </div>

          {/* Company */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-gray-400">
              Company
            </h3>
            <ul className="space-y-3">
              {["Features", "Pricing", "Affiliate Program", "Press Kit"].map(
                (item, idx) => (
                  <li key={idx}>
                    <Link
                      to="/"
                      className="text-base text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1 inline-block"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-gray-400">
              Support
            </h3>
            <ul className="space-y-3">
              {["Account", "Help", "Contact Us", "Customer Support"].map(
                (item, idx) => (
                  <li key={idx}>
                    <Link
                      to="/"
                      className="text-base text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1 inline-block"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Legals */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-gray-400">
              Legals
            </h3>
            <ul className="space-y-3">
              {["Terms & Conditions", "Privacy Policy", "Licensing"].map(
                (item, idx) => (
                  <li key={idx}>
                    <Link
                      to="/"
                      className="text-base text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1 inline-block"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Divider + Socials */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            Made with <span className="text-red-500">❤</span> using React & Tailwind
          </p>
          <div className="flex gap-5 mt-4 md:mt-0">
            <a href="#" className="transition transform hover:scale-110 hover:text-blue-400">🌐</a>
            <a href="#" className="transition transform hover:scale-110 hover:text-pink-400">🐦</a>
            <a href="#" className="transition transform hover:scale-110 hover:text-blue-500">📘</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
