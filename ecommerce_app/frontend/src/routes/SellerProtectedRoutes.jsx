import React from 'react'
import { Navigate } from 'react-router-dom'

const SellerProtectedRoutes = ({isSeller,children}) => {
  if(isSeller) return <Navigate to="/" replace />
  return children
}

export default SellerProtectedRoutes