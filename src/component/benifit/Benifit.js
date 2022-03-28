import React from 'react';
import { CheckIcon } from '@heroicons/react/solid';

const Benifit = ({benifit}) => {
    return (
        <div>
            <p className='flex items-center'><CheckIcon className='w-4 h-4 bg-green-300 rounded-lg mr-2' /> {benifit}</p>
        </div>
    );
};

export default Benifit;