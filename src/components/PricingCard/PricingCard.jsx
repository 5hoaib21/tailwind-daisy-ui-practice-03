import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
  console.log(pricing);
  const {name, price, description, features} = pricing
  return (
    <div className="flex flex-col bg-blue-800 rounded-xl p-5 m-5 space-y-3">
      {/* cart header */}
      <div>
        <h1 className='text-3xl font-bold'>{name}</h1>
        <h4 className='font-bold'>${price}.99/month</h4>
      </div>
      {/* card body */}
      <div className="flex-1 bg-blue-600 p-3.5  rounded-xl mt-10">
          <p className='text-xl font-bold'>{description}</p>
          <div className="mt-5 p-3.5 rounded-xl">
            {
            features.map((feature, index) => <PricingFeatures 
            key={index}
            feature={feature}></PricingFeatures> )
          }
          </div>
      </div>
      <div className='flex justify-center'>
        <button className="w-full btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Subscribe Now..!</button>
      </div>
    </div>
  );
};

export default PricingCard;