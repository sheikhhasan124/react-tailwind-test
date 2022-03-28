import React, { useState } from 'react';
import Link from '../link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navber = () => {
    const [open, setOpen]=useState(false)
      const routs = [
         {id:1,name:'home', link:'/home'},
         {id:2,name:'work', link:'/work'},
         {id:3,name:'about', link:'/about'},
         {id:4,name:'service', link:'/service'}
      ]
    return (
        <nav className='bg-indigo-200'>
            <div onClick={()=> setOpen(!open)} className='w-6 h-6 md:hidden'>
           {open ? <XIcon /> : <MenuIcon />}
            </div>
           <ul className={`md:flex justify-center absolute md:static duration-500 ease-in bg-indigo-200 w-full  ${open ? 'top-6': 'top-[-120px]'}`}>
           {routs.map(nav=> <Link key={nav.id} nav={nav} ></Link>)}
           </ul>
        </nav>
    );
};

export default Navber;