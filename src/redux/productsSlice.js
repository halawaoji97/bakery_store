import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  status: null,
  error: null,
};

// first param = action type, second params = action fetch
export const productsFetch = createAsyncThunk(
  'products/productsFetch',
  async () => {
    try {
      const response = await axios.get(
        'http://bakeryy.herokuapp.com/api/v1/member/landing-page'
      );
      return response?.data;
    } catch (error) {
      return isRejectedWithValue(error.response.data);
    }
  }
);

const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = 'pending';
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export default productsSlice.reducer;
