import React from 'react';

const PricingOption = ({option}) => {
    const {name,price}=option;
    return (
        <div className='bg-white rounded-lg p-4'>
            <h1 className='bg-indigo-300 py-2 rounded'>{name}</h1>
            <p><span className='text-5xl'>{price}</span>
            <span>/mo</span>
            </p>
        </div>
    );
};

export default PricingOption;