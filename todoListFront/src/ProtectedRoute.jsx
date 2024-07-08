import  { useContext } from 'react'
import { principalContext } from './context/MainContainer'
import {Navigate, Outlet} from 'react-router-dom'

export const ProtectedRoute = () => {
    const {isauthenticated,loading}= useContext(principalContext)

  if(loading){
    return <h1>...loading</h1>
  }

   if(!loading && !isauthenticated){
     return <Navigate to='/login'></Navigate>
   }
    
  return (
    <Outlet></Outlet>
  )
}

