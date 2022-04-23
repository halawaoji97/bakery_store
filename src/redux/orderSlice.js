import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const API_URL = 'https://bakeryy.herokuapp.com/api/v1/member/order-page';

export const todoSlide = createSlice({
  name: 'todo',
  initialState: {
    data: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.data.push(action.payload);
    },
    getTodo: (state, action) => {
      state.data = [action.payload];
    },
  },
});

export const getTodoAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/${data}`);
    dispatch(getTodo(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const addTodoAsync = (data) => async (dispatch) => {
  try {
    // console.log(data);
    const response = await axios.post(API_URL, data);
    // console.log(response);
    dispatch(addTodo(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const { addTodo, getTodo } = todoSlide.actions;
export const showTodo = (state) => state.todo.data;
export default todoSlide.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//   cartItems: localStorage.getItem('cartItems')
//     ? JSON.parse(localStorage.getItem('cartItems'))
//     : [],
//   cartTotalQty: 0,
//   cartTotalAmount: 0,
// };

// // create orderFetchpost
// const createOrder = createAsyncThunk('order/createOrder', async (order) => {
//   try {
//     const response = await axios.post(
//       'http://localhost:5000/api/v1/member/order-page',
//       order
//     );
//     return response?.data;
//     (dispatch) => {
//       dispatch({ type: 'CREATE_ORDER', payload: response.data });
//       localStorage.clear('cartItems');
//       navigate('/order');
//     };
//   } catch (err) {
//     console.log(err);
//   }
// });

// // create orderSlice
// const orderSlice = createSlice({
//   name: 'order',
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [createOrder.pending]: (state, action) => {
//       state.status = 'pending';
//     },
//     [createOrder.fulfilled]: (state, action) => {
//       state.status = 'success';
//       state.items = action.payload;
//     },
//     [createOrder.rejected]: (state, action) => {
//       state.status = 'rejected';
//       state.error = action.payload;
//     },
//   },
// });

// export const { postOrder } = orderSlice.actions;
// export default orderSlice.reducer;
