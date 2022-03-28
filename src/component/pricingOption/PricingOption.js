
import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benifit from '../benifit/Benifit';

const PricingOption = ({option}) => {
    const {name,price,benifits}=option;
    return (
        <div className='bg-white rounded-lg p-4'>
            <h1 className='bg-indigo-300 py-2 rounded'>{name}</h1>
            <p><span className='text-5xl'>{price}</span>
            <span>/mo</span>
            </p>
            <div>
                <h3 className='text-2xl text-left '>benefits-:</h3>
                {benifits.map(benifit=><Benifit benifit = {benifit} />)}
            </div>
            <button className='bg-green-500 flex justify-center items-center w-full py-4 text-white text-bold rounded hover:text-indigo-800'>
                bye now <ArrowRightIcon className='w-6 h-6 ml-2 bold' />
            </button>
        </div>
    );
};

export default PricingOption;