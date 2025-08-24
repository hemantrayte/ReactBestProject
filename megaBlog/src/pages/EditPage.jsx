import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import appwriteService from '../appwrite/config'
import Container from '../components/Container';
import PostForm from '../components/PostForm';

function EditPage() {
  const [post, setPosts] = useState(null)
  const {slug} = useParams();
  const navigate = useNavigate();

  useEffect(() =>{
   if(slug) {
    appwriteService.getPost(slug).then((post) => {
        if(post){
          setPosts(post);
        }
      }) 
    } else {
      navigate('/');
    }
  },[slug, navigate])
  return post ? (
    <div className='py-8'>
      <Container>
        <PostForm post={post} />
      </Container> 
    </div>
  ) : null
}

export default EditPage
