import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { DetailPage, HomePage, ListPage, LoginPage, ProfilePage, SignupPage } from './page'
import { Layout } from './routes'

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path:"/",
          element:<HomePage />
        },
        {
          path:"/profile",
          element:<ProfilePage />
        },
        {
          path:"/list",
          element:<ListPage />
        },
        {
          path:"/:id",
          element:<DetailPage />
        },
        {
          path:"/login",
          element:<LoginPage />
        },
        {
          path:"/signup",
          element:<SignupPage />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App