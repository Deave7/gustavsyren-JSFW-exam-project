import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/main.scss'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/Errorpage/Errorpage.tsx'
import Root from './pages/Root/Root.tsx'
import User from './pages/User/User.tsx'
import Home from './pages/Home/Home.tsx'
import Shelf from './pages/Shelf/Shelf.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" replace />,
      },
      {
        path: '/home',
        element: <Home/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: '/user',
        element: <User/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: '/shelf',
        element: <Shelf/>,
        errorElement: <ErrorPage/>,
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
