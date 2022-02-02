import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NumberFormat from '../utils/numberFormat';
import { useGetProductDetailQuery } from '../redux/productsApi';
import { addToCart } from '../redux/cartSlice';

const CardDetailProduct = () => {
  const { id } = useParams();
  const { data: product, isFetching, isSuccess } = useGetProductDetailQuery(id);
  const dispatch = useDispatch();

  const circleCommonClasses =
    'h-4 w-4 bg-gradient-to-r from-yellow-primary to-red-velvet transition-all ease-in duration-0 rounded-full';

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }, [id, product, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // useEffect(() => {
  //   const requestProductDetail = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await publicRequest.get(`/detail-page/${id}`);
  //       setProduct(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     setLoading(false);
  //   };
  //   requestProductDetail();
  // }, [id]);

  return (
    <section className='font-quicksand tracking-wide grid grid-cols-1 grid-rows-2 md:grid-rows-1 bg-white md:grid-cols-2 md:mt-36 container p-8 md:p-0 md:py-16 shadow-lg rounded-2xl border-2 mx-auto mb-44'>
      {isFetching ? (
        <div className='flex my-40 mx-auto'>
          <div
            className={`${circleCommonClasses} mr-1 animate-bounce200`}
          ></div>
          <div
            className={`${circleCommonClasses} mr-1 animate-bounce400`}
          ></div>
          <div
            className={`${circleCommonClasses} mr-1 animate-bounce600`}
          ></div>
        </div>
      ) : isSuccess ? (
        <>
          <div className=''>
            <img
              className='object-cover p-8 h-auto w-auto'
              src={`/${product.imageUrl}`}
              alt={product.name}
            />
          </div>
          <div className='flex justify-center flex-col'>
            <h1 className='font-bold text-3xl md:text-4xl tracking-wide text-dark-primary'>
              {product.name}
            </h1>
            <p className='text-2xl text-dark-primary font-semibold py-2'>
              {NumberFormat(product.price)}
            </p>
            <h2 className='text-xl font-semibold text-dark-primary mt-2'>
              Description
            </h2>
            <p className='md:text-xl text-dark-secondary tracking-wide py-2'>
              {product.description}
            </p>
            <hr />
            <p className='md:text-xl text-dark-secondary tracking-wide py-2'>
              Size : {product.size} cm
              <br />
              Weight : {product.weight} gr
              <br />
              Durability : 3 days
              <br />
              {/* Category : {product.categoryId.name} */}
              <br />
            </p>
            <div className='flex justify-between md:mr-16 my-16'>
              <button
                className='bg-gradient-to-r from-yellow-primary to-red-velvet transition-all ease-in duration-0 hover:duration-500 hover:bg-dark-primary  hover:text-white text-dark-secondary rounded-full py-3 px-12  font-semibold'
                onClick={() => handleAddToCart(product)}
              >
                Add To Cart
              </button>
              <button className='hover:bg-cta-bg transition-all ease-in duration-0 hover:duration-500 bg-gray-300  text-dark-primary rounded-full py-3 px-12  font-bold'>
                Add To Wishlist
              </button>
            </div>
          </div>
        </>
      ) : (
        <p className='text-red-velvet'>Unexpected error occured...</p>
      )}
    </section>
  );
};

export default CardDetailProduct;
