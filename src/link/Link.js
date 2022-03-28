import React from 'react';

const Link = ({nav}) => {
    const {name}=nav;
    return (
        <div>
            <li className='mr-10'><a href="#">{name}</a></li>
        </div>
    );
};

export default Link;