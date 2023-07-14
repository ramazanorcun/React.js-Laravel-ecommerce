import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  addProductService,
  deleteProductService,
  getProductService,
} from "../Services/ProductService";
//dispacth ile çağırmak için
//thunk  store dönen veriyi eklemek için kullanılır
export const getProduct = createAsyncThunk("product", async () => {
  const response = await getProductService();
  return response;
});
export const addProduct = createAsyncThunk("addProduct", async (data) => {
  const response = await addProductService(data);

  return response;
});
export const deleteProduct = createAsyncThunk("deleteProduct", async(productId)=>{
  const response = await deleteProductService(productId)
  return response;
});

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.push(action.payload);
      
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      let index= state.findIndex((product)=>product.id === action.payload.id);
      state.splice(index,1) 
    });
  },
});
export const { setProducts } = productSlice.actions;
const { reducer } = productSlice;
export default reducer;
