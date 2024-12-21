import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const CompanyLogin = () => {
    const[companyEmail,setCompanyEmail]=useState('')
    const[password,setPassword]=useState('')

    const submitHandler=(e)=>{
        e.preventDefault();

        setCompanyEmail('');
        setPassword('');
    }
  return (
    <div className='p-7 h-screen flex flex-col'>
        <h1 className='flex items-center justify-center font-bold text-center'>Company Login</h1>
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
      <h1 className='text-lg pt-2 font-medium mb-2'>What is Your Company Email:</h1>
      <div className='flex gap-4 mb-6'>
        <input
        required
        className='bg-[#eee] rounded px-4 w-full py-2 border text-lg placeholder:text-base'
        type='text'
        placeholder='Company Email'
        value={companyEmail}
        onChange={(e)=>{
          setCompanyEmail(e.target.value)
        }}
        />
      </div>
      <h1 className='text-lg font-medium mb-2'>What is Your Password:</h1>
      <div className='flex gap-4 mb-6'>
        <input
        required
        className='bg-[#eee] rounded px-4 w-full py-2 border text-lg placeholder:text-base'
        type='text'
        placeholder='Password'
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        />
      </div>
      <button className='bg-green-500 p-2 rounded-lg w-full font-medium text-lg flex justify-center items-center'>Login in</button>
      </form>
      <p>Create new Account? <Link to='/companysignin'><span className='text-blue-500'>Sing in</span></Link></p>
    </div>
    </div>
  )
}

export default CompanyLogin
