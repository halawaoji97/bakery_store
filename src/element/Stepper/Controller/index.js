import React from 'react';

export default function Controller(props) {
  return (
    <section className='container mx-auto'>
      <div className='flex justify-center items-center'>
        <div className='h-36 w-1/2 flex flex-col md:flex-row justify-between items-center'>
          {props.children}
        </div>
      </div>
    </section>
  );
}
