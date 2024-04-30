import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/main.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/Errorpage/Errorpage.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Root from './pages/Root/Root.tsx'
import User from './pages/User/User.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/user',
        element: <User/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
