import React from 'react'
import Links from '../navbar/Links'
import Link from 'next/link'

function Footer() {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "About",
      path: "/about",
    },]
  return (   

<footer className="bg-white rounded-lg shadow-lg my-5 font-semibold ">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm  sm:text-center ">© 2023 <Link href="/" className="hover:underline">ULTRA™</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-semibold sm:mt-0">
    {links.map((link) => (
          <Links item={link} key={link.title}/>
        ))}
    </ul>
    </div>
</footer>

  )
}

export default Footer