import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { HomePage, ProfilePage } from './page'

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<HomePage />,
      children:[
        {
          path:"/",
          element:<HomePage />
        },
        {
          path:"/profile",
          element:<ProfilePage />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App