"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Links = ({item}) => {
  const pathname = usePathname();

  return (
   <Link href={item.path}
   className={`${pathname === item.path ? "bg-black px-3  self-center transition-colors duration-300 delay-50 ease-in py-1  text-white rounded" : " px-2  py-1"}`}
   >
   {item.title}
   </Link>
  )
}

export default Links
