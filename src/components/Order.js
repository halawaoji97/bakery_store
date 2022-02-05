import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postOrder } from '../redux/orderAction';
import { addTodo } from '../redux/orderSlice';

const Order = () => {
  const dispatch = useDispatch();
  const a = useSelector((state) => state.order);
  console.log(a);

  useEffect(() => {
    dispatch(addTodo());
  }, [dispatch]);

  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
};

export default Order;
