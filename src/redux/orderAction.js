export const createOrder = (order) => (dispatch) => {
  fetch('http://localhost:5000/api/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: 'CREATE_ORDER', payload: data });
      localStorage.clear('cartItems');
      dispatch({ type: 'CLEAR_CART' });
    });
};
