import React from 'react';
import Link from '../link/Link';
import { MenuIcon } from '@heroicons/react/solid'

const Navber = () => {
      const routs = [
         {id:1,name:'home'},
         {id:2,name:'work'},
         {id:3,name:'about'},
         {id:4,name:'service'}
      ]
    return (
        <nav>
            <div className='w-6 h-6 md:hidden'>
           <MenuIcon />
            </div>
           <ul className='md:flex justify-center'>
           {routs.map(nav=> <Link key={nav.id} nav={nav} ></Link>)}
           </ul>
        </nav>
    );
};

export default Navber;