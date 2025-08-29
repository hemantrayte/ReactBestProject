// import React, { useEffect, useState } from 'react'
// import appwriteService from '../appwrite/config'
// import { Container , PostCard} from '../components';

// function AllPosts() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//    appwriteService.getPosts([]).then((posts) => {
//       if(posts){
//         setPosts(posts.documents)
//       }
//    })
//   },[])
//   return (
//     <div className='w-full py-8'>
//       <Container>
//        <div className='flex flex-wrap'>
//        {
//           posts.map((post) =>(
//             <div key={post.$id} className='p-2 w-1/4'>
//                  <PostCard post={post} />
//             </div>
//           ))
//         }
//        </div>
//       </Container>
//     </div>
//   )
// }

// export default AllPosts

import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appwriteService.getPosts([]).then((result) => {
      if (result) {
        setPosts(result.documents);
      }
      setLoading(false);
    });
  }, []);

  return (
    <div className="w-full py-10">
      <Container>
        {loading ? (
          <p className="text-center text-gray-500">Loading posts...</p>
        ) : posts.length === 0 ? (
          <p className="text-center text-gray-500">No posts available yet 🚀</p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {posts.map((post) => (
              <div
                key={post.$id}
                className="transition-transform duration-300 hover:scale-105"
              >
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default AllPosts;
