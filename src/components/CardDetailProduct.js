import React from 'react';
import ProductImg from '../assets/img/baked-cup-cake-removebg-preview.png';

const CardDetailProduct = () => {
  return (
    <section className='grid grid-cols-1 grid-rows-2 md:grid-rows-1 bg-white md:grid-cols-2 md:mt-36 container p-8 md:p-0 md:py-16 shadow-lg rounded-2xl border-2 mx-auto mb-44'>
      <div className=''>
        <img
          className='object-cover p-8 h-auto w-auto'
          src={ProductImg}
          alt='product'
        />
      </div>
      <div className='flex justify-center flex-col'>
        <h1 className='font-bold text-3xl md:text-4xl tracking-wide text-dark-primary'>
          Cake cup
        </h1>
        <p className='text-2xl text-dark-primary font-medium py-2'>
          Rp. 600000
        </p>
        <h2 className='text-xl text-dark-primary mt-2'>Description</h2>
        <p className='md:text-xl text-dark-secondary tracking-wide py-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non <br />
          repellat aspernatur commodi illo officiis similique architecto <br />
          impedit consequatur. Aliquam rerum saepe placeat dolor at neque <br />
          excepturi! Alias et molestias molestiae!
        </p>
        <hr />
        <p className='md:text-xl text-dark-secondary tracking-wide py-2'>
          Size : 4x6 cm
          <br />
          Weight : 480 gr
          <br />
          Durability : 3 days
          <br />
          Category : Cake
          <br />
        </p>
        <div className='flex justify-between md:mr-16 my-16'>
          <button className='bg-yellow-primary transition-all ease-in duration-0 hover:duration-500 hover:bg-dark-primary  text-dark-primary hover:text-white rounded-full py-3 px-12  font-bold'>
            Add To Cart
          </button>
          <button className='bg-grey-secondary transition-all ease-in duration-0 hover:duration-500 hover:bg-dark-primary  text-dark-primary hover:text-white rounded-full py-3 px-12  font-bold'>
            Add To Wishlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardDetailProduct;
