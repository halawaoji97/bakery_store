export const createOrder = (order) => (dispatch) => {
  fetch('https://bakeryy.herokuapp.com/api/v1/member/order-page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
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
