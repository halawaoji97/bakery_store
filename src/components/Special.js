import React from 'react';
import landingPage from '../data/landingPage.json';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';

const Special = () => {
  return (
    <section id='special' className=' justify-center items-center flex my-10'>
      <div className='container mx-auto px-6 md:px-0'>
        <h3 className='font-bold text-3xl md:text-4xl tracking-wide text-dark-primary text-center pt-8'>
          Special for you
        </h3>
        <div className='grid my-12 grid-cols-1 grid-rows-3 md:grid-rows-1 gap-4 md:gap-6 md:grid-cols-3 lg:grid-cols-3 justify-center items-center'>
          {landingPage.special.map((item, index) => {
            return (
              <div className='shadow-lg group rounded-xl transition-all origin-left duration-700 ease-out p-8'>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className='object-cover  p-8 h-auto w-auto'
                />
                <div className='flex justify-between items-center'>
                  <div>
                    <h4 className='text-2xl text-dark-primary font-medium'>
                      <Link to={`/detail/${item.id}`}>{item.name}</Link>
                    </h4>
                    <span className='text-xl text-dark-secondary'>
                      Rp. {item.price}
                    </span>
                  </div>
                  <div className='flex justify-between w-1/4'>
                    <button>
                      <AiOutlineHeart size={32} />
                    </button>
                    <button>
                      <AiOutlineShoppingCart size={32} />
                    </button>
                  </div>
                </div>
                {/* <div className='bg-gradient-to-r from-dark-bg to-cyan-700 rounded-bl-2xl  rounded-tr-2xl  text-center w-48  absolute top-0 right-0 group-hover:hidden'>
                  <h6 className='text-cyan-light text-xl py-2'>{item.name}</h6>
                </div> */}
                {/* <div className='bg-gradient-to-r from-dark-bg to-cyan-700 rounded-2xl  text-center flex justify-center items-center flex-col shadow-lg absolute top-0 right-0 bottom-0 left-0 w-full px-12 py-0 scale-y-0 group-hover:scale-y-100 transition-tansform ease-in duration-700 origin-top opacity-0 group-hover:opacity-100'>
                  <h6 className='text-cyan-light uppercase text-xl py-2'>
                    {item.name}
                  </h6>
                  <p className='text-cta-bg  md:text-l pb-6  font-normal '>
                    {item.description}
                  </p>
                  <Link
                    to='/'
                    className='bg-gradient-to-r from-main-hue to-cyan-light transition-all ease-in duration-0 hover:duration-700 hover:animate-pulse hover:from-cyan-light hover:to-main-hue text-white rounded-full py-3 px-12 md:ml-6 font-medium'
                  >
                    Visit
                  </Link> */}
                {/* </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Special;
