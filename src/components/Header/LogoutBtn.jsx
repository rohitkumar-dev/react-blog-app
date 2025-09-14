import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth.js'
import {logout} from '../../store/authSlice.js'

export default function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button onClick={logoutHandler} className='shadow-lg inline-block px-4  py-2 w-full font-medium rounded-lg bg-black text-white text-start cursor-pointer '>Logout</button>
  )
}

