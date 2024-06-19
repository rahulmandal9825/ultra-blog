import React from 'react'
import Links from './Links';
import Link from 'next/link';


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
  },
  {
    title: "Admin",
    path: "/admin",
  },
];

function Navlink() {
  return (
    <div className="flex gap-10 ">
      <div className="flex gap-10 ">
        {links.map((link) => (
          <Links item={link} key={link.title}/>
        ))}
      </div>
    
    </div>
  )
}

export default Navlink