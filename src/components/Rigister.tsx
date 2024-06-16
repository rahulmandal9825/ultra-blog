"use client";

import React from 'react'
import { signup } from '../lib/actions'
import { useFormState } from "react-dom";
import Link from 'next/link';

const Rigister = () => {
    const [state, formAction] = useFormState(signup, 0);
  return (
    <>
      <form action={formAction} className="flex  flex-col justify-between gap-3 w-full h-[400px] border-2 p-5 rounded-2xl border-gray-300 self-center shadow-xl">
              <h1 className=" self-center font-bold text-2xl"> Register</h1>
                <input type="text" placeholder="username" name="username"  className="outline-none" />
                <input type="email" placeholder="email" name="email"  className="outline-none"/>
                <input type="password" placeholder="password" name="password"  className="outline-none"/>
                <input type="password" placeholder="password again" name="passwordRepeat" className="outline-none" />
                <button className="bg-black p-2 rounded-lg text-white">Register</button>
                <h1 className='text-sm text-red-500 self-center'>{state?.error}</h1>
                <Link className=' self-center' href="/login">
        Have an account? <b>Login</b>
      </Link>
            </form>


    </>
     
  )
}

export default Rigister
