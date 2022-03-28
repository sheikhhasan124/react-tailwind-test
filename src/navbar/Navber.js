import React from 'react';
import Link from '../link/Link';

const Navber = () => {
      const routs = [
         {id:1,name:'home'},
         {id:2,name:'work'},
         {id:3,name:'about'},
         {id:4,name:'service'}
      ]
    return (
        <nav>
           <ul>
           {routs.map(nav=> <Link key={nav.id} nav={nav} ></Link>)}
           </ul>
        </nav>
    );
};

export default Navber;