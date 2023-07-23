import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    //Redux Store
    const isAuth = useSelector((store)=> store.authReducer.isAuth)

    if(!isAuth){
       return <Navigate to={"/"} />
    }
    
  return children
}

export default PrivateRoute
