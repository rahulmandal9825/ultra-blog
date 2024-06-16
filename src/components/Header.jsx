import React from 'react'
import Image from 'next/image';

const Header = ({post}) => {
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      }
  return (

    <>
  <div className="image-container w-full h-[400px] relative ">
      <Image src="/image1.jpg" fill alt="heading" className="object-cover rounded-xl brightness-50" />
      <div className=" text-white text-overlay absolute inset-10 mt-40 flex flex-col gap-3 justify-cente">
        <h2 className='bg-blue-600 w-20 text-center rounded-lg text-lg'>{capitalizeFirstLetter(post.tags[0])}</h2>
        <h1 className=" font-bold text-2xl">{post.title}</h1>
        <div className='flex gap-2 mt-5'>
            <div className="image-container w-[35px] h-[35px] relative ">
        <Image src={`https://avatar.iran.liara.run/public/${post.id}`} fill alt="heading" className="object-cover rounded-xl " />
        </div>
        <div className='flex gap-2 text-lg self-center text-center'>
            <h1>Rahul mandal, </h1>
            <h1>26 jun 20024</h1>
        </div>
        </div>
        
      </div>

    </div>

    
    </>
     )
}

export default Header
