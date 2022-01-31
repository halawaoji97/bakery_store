import React, { useEffect, useState } from 'react';
import landingPage from '../data/landingPage.json';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import axios from 'axios';

const Special = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const requestProduct = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          'http://localhost:5000/api/v1/member/landing-page'
        );
        const json = await res.data.specialProduct;
        console.log(json);
        setProducts(json);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    requestProduct();
  }, []);
  console.log(products);

  return (
    <section id='special' className=' justify-center items-center flex my-10'>
      <div className='container mx-auto px-6 md:px-0'>
        <h3 className='font-bold text-3xl md:text-4xl tracking-wide text-dark-primary text-center pt-8'>
          Special for you
        </h3>
        <div className='grid my-12 grid-cols-1 grid-rows-3 md:grid-rows-1 gap-4 md:gap-6 md:grid-cols-3 lg:grid-cols-3 justify-center items-center'>
          {loading && <div>Loading</div>}
          {products &&
            products.map((product, index) => (
              <div
                key={index}
                className='shadow-lg group rounded-xl transition-all origin-left duration-700 ease-out p-8'
              >
                <img
                  src={`${product.imageUrl}`}
                  alt={product.name}
                  className='object-cover  p-8 h-auto w-auto'
                />
                <div className='flex justify-between items-center'>
                  <div>
                    <h4 className='text-2xl text-dark-primary font-medium'>
                      <Link to={`/detail/${product._id}`}>{product.name}</Link>
                    </h4>
                    <span className='text-xl text-dark-secondary'>
                      Rp. {product.price}
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
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Special;
