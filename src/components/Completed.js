import React from 'react'
import { Link } from 'react-router-dom'

export default function Completed() {
  return (
    <div className='container' style={{ marginBottom: 30 }}>
      <div className='mt-10 justify-content-center text-center'>
        <div className='col-4'>
          <h1 className='font-medium text-2xl'>Successfully order</h1>
          <p className='text-gray-500 my-10'>
            We will inform you via email later once the transaction has been
            accepted
          </p>

          <Link
            to='/'
            className='bg-gradient-to-r from-yellow-primary to-red-velvet transition-all ease-in duration-0 hover:duration-500 hover:bg-dark-primary  hover:text-white text-dark-secondary rounded-full py-3 px-12  font-bold'
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
