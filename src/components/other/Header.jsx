import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = ({ changeUser, data }) => {
  // const [userName , setUserName] = useState('')
  // if(!data){
  //   setUserName('Mohammad Ayub')
  // }else{
  //   setUserName(data.firstName)
  // }
  
  const logOut = () =>{
    // localStorage.setItem('loggedInUser','')
    localStorage.removeItem('LoggedInUser')
    // window.location.reload()
    changeUser('')
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium text-white'>Hello <br /><span className=' text-white text-3xl font-semibold'>{data?.firstName}</span></h1>
      <button onClick={logOut} className='hover:scale-95 bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Logout</button>
    </div>
    
  )
}

export default Header

