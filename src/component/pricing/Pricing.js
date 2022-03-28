import React from 'react';
import PricingOption from '../pricingOption/PricingOption';

const Pricing = () => {
    const priceOption = [
        {id:1, name:'oppo', price:123,benifits:[
            'good','ex-good','ex-ex-good','better'
        ]},
        {id:2, name:'pppo', price:125,benifits:[
            'good','ex-good','ex-ex-good','better'
        ]},
        {id:3, name:'appo', price:124,benifits:[
            'good','ex-good','ex-ex-good','better'
        ]}
    ]
    return (
        <div className='bg-indigo-200 p-8 mt-6'>
            <h1 className='text-4xl '>Best deals of the shop</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, omnis!</p>
          <div className='grid md:grid-cols-3 gap-8 mt-4'>
              {priceOption.map(option=><PricingOption key={option.id} option={option} />)}
          </div>
        </div>
    );
};

export default Pricing;