import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/login'
import EmployeeDashboard from './components/dashboard/employeeDashboard'
import AdminDashboard from './components/dashboard/adminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { authContext } from './Context/AuthProvider'

const App = () => {

  

  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage();
    
  // }, []);
   
  const [user, setUser] = useState(null);
  const [logedInUserData, setLogedInUserData] = useState(null);
  const authData = useContext(authContext)

  // useEffect(()=>{
    
  //   const loggedInUser = localStorage.getItem('LoggedInUser')
  //   if(loggedInUser){
  //     const userData = JSON.parse(loggedInUser)
  //     setUser(userData.role)
  //     setLogedInUserData(userData.data)
      
      
  //   }
    
  // },[])
  useEffect(() => {
  const interval = setInterval(() => {
    const loggedInUser = localStorage.getItem('LoggedInUser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)

      if (userData.role === 'employee') {
        const employees = JSON.parse(localStorage.getItem('employees'))

        const currentUser = employees.find(
          (e) => e.email === userData.data.email
        )

        setLogedInUserData(currentUser)
      }
    }
  }, 500)

  return () => clearInterval(interval)
}, [])
  // useEffect(()=>{
  //         if(authData){
  //           const LoggedInUser = localStorage.getItem("LoggedInUser")
  //           if(LoggedInUser){
  //             setUser(LoggedInUser.role)
  //           }
  //       }
  //     },[authData])
  
  


  const handleLogin = (email, password) => {

  if(email === 'admin@me.com' && password === '123'){
    setUser('admin')
    localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'admin' }))
    
  } else {

    const employee = authData?.employees?.find(
      (e) => email === e.email && e.password === password
    )

    if(employee){
      setUser('employee')
      setLogedInUserData(employee)

      localStorage.setItem(
        'LoggedInUser',
        JSON.stringify({ role: 'employee',Data : employee })
      )

    } else {
      alert("Invalid Email or Password")
    }
  }
}
  
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard changeUser={setUser} data={{ firstName: 'Admin' }} /> : (user === 'employee' ? <EmployeeDashboard changeUser={setUser} data={logedInUserData} /> : null)}
    </>
  )
}

export default App;