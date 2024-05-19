import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { HomePage, ListPage, ProfilePage } from './page'
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
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App