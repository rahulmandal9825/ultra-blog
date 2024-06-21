
import React from 'react';
import Links from './Links';

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
    <div className="flex gap-10">
      {links.map((link) => (
        <Links item={link} key={link.title}/>
      ))}
    </div>
  );
}

export default Navlink;
