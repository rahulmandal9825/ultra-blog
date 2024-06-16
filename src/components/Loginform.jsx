"use client";

import React from 'react'
import { Login } from '../lib/actions';
import { useFormState } from "react-dom";

export const Loginform = () => {
  const [state, formAction] = useFormState(Login, 0);
  return (
    <>
      <form action={formAction} className='flex flex-col justify-between w-full h-[80%]'>
            <input type="text" placeholder='Username' name='username'  className='outline-none'/>
            <input type="password" placeholder='Password' name='password' className='outline-none'/>
            <button className='bg-black w-full text-white p-2 rounded-lg'>Login</button>
        </form>
</>
      
  )
}
