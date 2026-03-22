import React from 'react';

const PricingFeatures = ({feature}) => {
  console.log(feature);
  return (
    <p className='text-balance mt-4'> {<input type="checkbox" defaultChecked className="mr-2 checkbox checkbox-primary" />}-{feature}</p>
  );
};

export default PricingFeatures;