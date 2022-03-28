import React from 'react';
import Navber from '../../navbar/Navber';

const Header = () => {
    return (
        <div>
            <Navber ></Navber>
            <h1 className='text-6xl'>welcome to my pricing shop</h1>
        </div>
    );
};

export default Header;