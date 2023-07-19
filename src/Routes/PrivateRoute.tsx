import React, { useContext } from 'react'
import AuthContext from '../contexts/Auth'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute() {
    const {user} = useContext(AuthContext)
  return (
   <>
    {user ? (<Outlet />) : (<Navigate to="/" />)}
   </>
  )
}

export default PrivateRoute