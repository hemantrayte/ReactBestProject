// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { Provider } from 'react-redux'
// import store from './store/store.js'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { AuthLayout } from './components/index.js';

// import Signup from './pages/Signup.jsx'
// // import Login from './pages/Login.jsx'
// import AllPosts from './pages/AllPosts.jsx'
// import AddPost from './pages/AddPost.jsx'
// import EditPage from './pages/EditPost.jsx'
// import Post from './pages/Post.jsx'
// import Home from "./pages/Home.jsx"
// import Login from './pages/Login.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//         {
//             path: "/",
//             element: <Home />,
//         },
//         {
//             path: "/login",
//             element: (
//                 <AuthLayout authentication={false}>
//                     <Login />
//                 </AuthLayout>
//             ),
//         },
//         {
//             path: "/signup",
//             element: (
//                 <AuthLayout authentication={false}>
//                     <Signup/>
//                 </AuthLayout>
//             ),
//         },
//         {
//             path: "/all-posts",
//             element: (
//                 <AuthLayout authentication>
//                     {" "}
//                     <AllPosts />
//                 </AuthLayout>
//             ),
//         },
//         {
//             path: "/add-post",
//             element: (
//                 <AuthLayout authentication>
//                     {" "}
//                     <AddPost />
//                 </AuthLayout>
//             ),
//         },
//         {
//             path: "/edit-post/:slug",
//             element: (
//                 <AuthLayout authentication>
//                     {" "}
//                     <EditPage/>
//                 </AuthLayout>
//             ),
//         },
//         {
//             path: "/post/:slug",
//             element: <Post />,
//         },
//     ],
// },
// ])

// createRoot(document.getElementById('root')).render(
//     <Provider store={store}>
//       <RouterProvider router={router} />
 
//     </Provider>
// )

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthLayout } from "./components/index.js";

import Signup from "./pages/Signup.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import AddPost from "./pages/AddPost.jsx";
import EditPage from "./pages/EditPost.jsx";
import Post from "./pages/Post.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication={true}>
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication={true}>
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication={true}>
            <EditPage />
          </AuthLayout>
        ),
      },
      { path: "/post/:slug", element: <Post /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
