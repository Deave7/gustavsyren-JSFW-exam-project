import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/main.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/Errorpage/Errorpage.tsx'
import Home from './pages/Home/Home.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
