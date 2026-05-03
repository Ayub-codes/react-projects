import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    
    
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')

     const submitHandler = (e)=>{
        e.preventDefault()
        console.log("Email",email,"password",password);
        handleLogin(email,password)
        setEmail('')
        setPassword('')
     }
  return (
   <div className='flex h-screen w-screen item-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className='flex flex-col item-center justify-center'>
                <input value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }} required className='bg-black text-white placeholder:text-white border-2 border-emerald-600 rounded-full py-2 px-6 text-xl outline-none' type="email" placeholder='Enter Your Email' />
                <input value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }} required className='mt-3 bg-black text-white placeholder:text-white border-2 border-emerald-600 rounded-full py-4 px-5 text-xl  outline-none' type="password" placeholder='Enter Your Password' />
                <button className='mt-5 hover:scale-95 placeholder:text-white border-none bg-emerald-600 rounded-full py-2 px-8 text-xl text-white outline-none'>Login</button>
            </form>
        </div>
   </div>
  )
}

export default Login
