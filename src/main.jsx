import React from 'react'
import ReactDOM from 'react-dom/client'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './layout/Main';
import Home from './components/Home';
import Destinations from './components/Destinations';
import AuthProvider from './proviers/AuthProvider';
import Register from './components/Register';
import Login from './components/Login';
import About from './components/About';
import Destination from './components/Destination';
import Blogs from './components/Blogs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/destinations',
        element: <Destinations></Destinations>
      },
      {
        path: '/destination/:id',
        element: <Destination></Destination>,
        loader: ({ params }) => fetch(`https://travel-bug-server-abhijitsarker.vercel.app/destination/${params.id}`)
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>,
)
