import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/main.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/Errorpage/Errorpage.tsx'
import Start from './pages/Start/Start.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Start/>,
    errorElement: <ErrorPage/>
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
