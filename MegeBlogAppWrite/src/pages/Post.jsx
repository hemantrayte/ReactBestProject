// import parse from "html-react-parser";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import appwriteService from "../appwrite/config";
// import { Container, Button } from "../components";

// export default function Post() {
//     const [post, setPost] = useState(null);
//     const { slug } = useParams();
//     const navigate = useNavigate();

//     const userData = useSelector((state) => state.auth.userData);

//     const isAuthor = post && userData ? post.userId === userData.$id : false;

//     useEffect(() => {
//         if (slug) {
//             appwriteService.getPost(slug).then((post) => {
//                 if (post) setPost(post);
//                 else navigate("/");
//             });
//         } else navigate("/");
//     }, [slug, navigate]);

//     const deletePost = () => {
//         appwriteService.deletePost(post.$id).then((status) => {
//             if (status) {
//                 appwriteService.deleteFile(post.featuredImage);
//                 navigate("/");
//             }
//         });
//     };

//     return post ? (
//         <div className="py-8">
//             <Container>
//                 <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
//                     <img
//                         src={appwriteService.getFilePreview(post.featuredImage)}
//                         alt={post.title}
//                         className="rounded-xl"
//                     />

//                     {isAuthor && (
//                         <div className="absolute right-6 top-6">
//                             <Link to={`/edit-post/${post.$id}`}>
//                                 <Button bgColor="bg-green-500" className="mr-3">
//                                     Edit
//                                 </Button>
//                             </Link>
//                             <Button bgColor="bg-red-500" onClick={deletePost}>
//                                 Delete
//                             </Button>
//                         </div>
//                     )}
//                 </div>
//                 <div className="w-full mb-6">
//                     <h1 className="text-2xl font-bold">{post.title}</h1>
//                 </div>
//                 <div className="browser-css">
//                     {parse(post.content)}
//                     </div>
//             </Container>
//         </div>
//     ) : null;
// }

import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Container, Button } from "../components";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        let isMounted = true; // ✅ prevents state updates on unmounted components
        if (slug) {
            appwriteService.getPost(slug).then((fetchedPost) => {
                if (fetchedPost && isMounted) setPost(fetchedPost);
                else navigate("/");
            });
        } else navigate("/");
        return () => {
            isMounted = false;
        };
    }, [slug, navigate]);

    const deletePost = async () => {
        if (!window.confirm("Are you sure you want to delete this post?")) return;

        const status = await appwriteService.deletePost(post.$id);
        if (status) {
            await appwriteService.deleteFile(post.featuredImage);
            navigate("/");
        }
    };

    return post ? (
        <div className="py-8">
            <Container>
                {/* Post Image */}
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2 shadow-md">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl max-h-[500px] object-cover"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6 flex">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>

                {/* Post Title */}
                <div className="w-full mb-6 text-center">
                    <h1 className="text-3xl font-extrabold text-gray-800">
                        {post.title}
                    </h1>
                </div>

                {/* Post Content */}
                <div className="prose prose-lg max-w-none">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : (
        <div className="flex items-center justify-center h-screen">
            <p className="text-xl text-gray-500">Loading post...</p>
        </div>
    );
}
