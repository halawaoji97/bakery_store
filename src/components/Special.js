import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useGetAllProductsQuery } from '../redux/productsApi';
import { addToCart } from '../redux/cartSlice';

const Special = () => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetAllProductsQuery();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  console.log(data);

  return (
    <section
      id='special'
      className='font-quicksand justify-center items-center flex my-10'
    >
      {isLoading ? (
        <p>Loading</p>
      ) : error ? (
        <p>An error occured</p>
      ) : (
        <>
          <div className='container mx-auto px-6 md:px-0'>
            <h3 className='font-bold text-3xl md:text-4xl tracking-wide text-dark-primary text-center pt-8'>
              Special for you
            </h3>
            <div className='grid my-12 grid-cols-1 grid-rows-3 md:grid-rows-1 gap-4 md:gap-6 md:grid-cols-3 lg:grid-cols-3 justify-center items-center'>
              {data &&
                data?.specialProduct?.map((product, index) => (
                  <div
                    key={index}
                    className='shadow-lg group rounded-xl transition-all origin-left duration-700 ease-out p-4'
                  >
                    <img
                      src={`${product.imageUrl}`}
                      alt={product.name}
                      className='object-cover p-8 h-auto w-auto'
                    />
                    <div className='flex justify-between items-center'>
                      <div>
                        <h4 className='text-2xl text-dark-primary font-semibold'>
                          <Link to={`/detail/${product._id}`}>
                            {product.name}
                          </Link>
                        </h4>
                        <span className='text-xl text-dark-secondary font-normal'>
                          Rp. {product.price}
                        </span>
                      </div>
                      <div className='flex justify-between w-1/4'>
                        <button className='text-dark-primary hover:text-white hover:bg-red-velvet rounded-full transition-all ease-in delay-75 duration-300 mr-2'>
                          <AiOutlineHeart className='p-2' size={48} />
                        </button>
                        <button
                          className='text-dark-primary hover:text-white hover:bg-yellow-primary rounded-full transition-all ease-in delay-75 duration-300'
                          onClick={() => handleAddToCart(product)}
                        >
                          <AiOutlineShoppingCart className='p-2' size={48} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Special;
