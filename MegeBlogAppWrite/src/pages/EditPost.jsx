// import React, { useEffect, useState } from 'react'
// import { Container, PostForm } from '../components'
// import appwriteService from "../appwrite/config"
// import { useNavigate, useParams } from 'react-router-dom';

// function EditPage() {
//   const [post, setPosts] = useState(null)
//   const {slug} = useParams();
//   const navigate = useNavigate();

//   useEffect(() =>{
//    if(slug) {
//     appwriteService.getPost(slug).then((post) => {
//         if(post){
//           setPosts(post);
//         }
//       }) 
//     } else {
//       navigate('/');
//     }
//   },[slug, navigate])
//   return post ? (
//     <div className='py-8'>
//       <Container>
//         <PostForm post={post} />
//       </Container> 
//     </div>
//   ) : null
// }

// export default EditPage

import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPage() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService
        .getPost(slug)
        .then((result) => {
          if (result) {
            setPost(result);
          } else {
            setError("Post not found.");
            setTimeout(() => navigate("/"), 2000);
          }
        })
        .catch(() => {
          setError("Something went wrong while fetching the post.");
        })
        .finally(() => setLoading(false));
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-500">
        Loading post...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64 text-red-500">
        {error}
      </div>
    );
  }

  return post ? (
    <div className="py-8">
      <Container>
        <h2 className="text-xl font-semibold mb-4">Edit Post</h2>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPage;
