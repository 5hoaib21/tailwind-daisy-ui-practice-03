import React from 'react';

const Link = ({route}) => {
  return (
    <li className='mr-10 hover:opacity-50 p-0.5 m-0.5 border rounded-md'>
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;