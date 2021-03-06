import React from 'react';

export default function Meta({ data, current }) {
  return (
    <div className='text-center container mx-auto font-quicksand'>
      <h1 className='font-bold text-3xl md:text-4xl text-dark-primary text-center mt-10 md:mt-20'>
        {data[current] && data[current].title}
      </h1>
      <p className='text-dark-secondary'>
        {data[current] && data[current].description}
      </p>
    </div>
  );
}
