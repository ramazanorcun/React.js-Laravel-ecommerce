import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProductService,
  getProductService,
} from "../Services/ProductService";

export const getProduct = createAsyncThunk("product", async () => {
  const response = await getProductService();
  console.log(response);
  return response;
});
export const addProduct = createAsyncThunk(
  'addProduct',
  async (product) => {
    const response = await addProductService(product);
    console.log(response.data);
    return response.data;
  }
);

const ProductSlice = createSlice({
  name: "product",
    initialState: [],
    reducers: {
      setProduct: (state, action) => {
        return action.payload;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(getProduct.fulfilled, (state, action) => {
        return action.payload;
      
      });

      builder.addCase(addProduct.fulfilled, (state, action) => {
        console.log(state);
        state.push(action.payload);
      });
  },


  
});

export const { setProduct } = ProductSlice.actions;
const { reducer } = ProductSlice;
export default reducer;
