// import React from 'react'
// import { Container, PostForm } from '../components'

// const AddPost = () => {
//   return (
//     <div className='py-8'>
//       <Container>
//         <PostForm />
//       </Container>
//     </div>
//   )
// }

// export default AddPost
import React from "react";
import { Container, PostForm } from "../components";

const AddPost = () => {
  return (
    <div className="py-8">
      <Container>
        <h2 className="text-2xl font-bold mb-6 text-center">Create New Post</h2>
        <PostForm />
      </Container>
    </div>
  );
};

export default AddPost;
