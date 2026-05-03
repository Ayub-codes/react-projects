import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const authContext = createContext()

const AuthProvider = ({children}) => {
 
    const [userData , setUserData] = useState(null)
    const data = getLocalStorage()
    
    useEffect(()=>{
        setLocalStorage()
        const {employees,admin} = getLocalStorage()
        setUserData({employees,admin})
    },[])

  return (
    <div>
      <authContext.Provider value={userData}>
        {children}
      </authContext.Provider>
    </div>
  )
}

export default AuthProvider
