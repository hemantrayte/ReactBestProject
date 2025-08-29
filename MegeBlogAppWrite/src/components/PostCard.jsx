// import React from 'react'
// import appwriteService from '../appwrite/config'
// import {Link} from 'react-router-dom'

// function PostCard({
//   $id, title, featuredImage
// }) {
  
//   return (
//    <Link to={`/post/${$id}`}>
//     <div className='w-full bg-gray-100 rounded-xl p-4'>
//       <div className='w-full justify-center mb-4'>
//         <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
//       </div>
//       <h2
//       className='text-xl font-bold'
//       >{title}</h2>
//     </div>
//    </Link>
//   )
// }

// export default PostCard

import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block group">
      <div className="w-full bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
        {/* Image */}
        <div className="w-full h-48 overflow-hidden">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
