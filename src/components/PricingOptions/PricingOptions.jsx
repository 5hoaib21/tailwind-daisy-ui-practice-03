import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({PricingPromise}) => {


  const pricingData = use(PricingPromise)
  

  return (
    <div>
      <h2 className='text-2xl font-bold flex justify-center text-blue-600'>Get our Membership</h2>
      <div className='grid md:grid-cols-3'>
        {
          pricingData.map(pricing => <PricingCard
          key={pricing.id}
           pricing={pricing}></PricingCard>)
        }
      </div>
    </div>
  );
};

export default PricingOptions;