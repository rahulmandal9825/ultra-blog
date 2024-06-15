import Link from 'next/link';
import React from 'react'
import Navlink from './Navlink';
import Swich from './Swich';


function Navbar() {
  return (
    <div className="p-3 flex justify-between shadow-lg rounded-xl mt-3">
        <Link href="/" className="text-xl font-semibold py-1">
        Ulra Blog
        </Link>
        <div>
          <Navlink/>
        </div>
        <div className="flex">
          <div className="bg-slate-200 px-2 py-1 rounded-lg">
          <input type="text" placeholder="Search" name="Search" className="outline-none text-slate-600 bg-transparent" />
          </div>
          <div>
            <Swich/>
          </div>
        </div>
    </div>
  )
}

export default Navbar