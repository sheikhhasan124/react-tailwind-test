import React from 'react';

const Link = ({nav}) => {
    const {name,link}=nav;
    return (
        <div>
            <li className='mr-10'><a href={link}>{name}</a></li>
        </div>
    );
};

export default Link;