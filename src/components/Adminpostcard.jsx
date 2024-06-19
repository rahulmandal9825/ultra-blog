"use client";
import Image from 'next/image'
import React from 'react'
import { deletePost } from '../lib/actions';
import { useFormState } from "react-dom";



const Adminpostcard = ({post , id }) => {
      console.log(id);
  const [state, formAction] = useFormState(deletePost, undefined);
  return (

        <div className='flex gap-4 justify-between bg-blue-200/40 p-3 rounded-lg'>
                <div className='flex gap-2'>
                   <Image src={post?.image} alt="" className=" rounded-full" height={50} width={50}/>
            <h1>{post?.title}</h1> 
                </div>
                <h1>{post.id}</h1>
             
            <form action={formAction}>
            <input type="hidden" name="id" value={post.id} />
            <button className='bg-red-500 text-white p-2 rounded-xl'>Delete</button>
          </form>
        </div>
  )
}

export default Adminpostcard
