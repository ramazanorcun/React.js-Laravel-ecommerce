import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addCategoriesService,
  deleteCategoriesService,
  getCategoriesService,
  updateCategoriesService,
} from "../Services/CategoriesServices";

export const getCategories = createAsyncThunk(
  'categories',
  async () => {
    return await getCategoriesService();
  }
);
export const addCategories = createAsyncThunk(
  'addCategory',
  async (category) => {
    return await addCategoriesService(category);
  }
);
export const deleteCategories = createAsyncThunk(
  'deleteCategory',
  async (categoryId) => {
    return await deleteCategoriesService(categoryId);
  }
);
export const updateCategories = createAsyncThunk(
  'updateCategory',
  async (categoryId) => {
    return await updateCategoriesService(categoryId);
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(addCategories.fulfilled, (state, action) => {
      state.push(action.payload);
    });

    builder.addCase(deleteCategories.fulfilled, (state, action) => {
      let index = state.findIndex((category) => category.id === action.payload.id);
      state.splice(index, 1);
    });
    
    builder.addCase(updateCategories.fulfilled, (state, action) => {
      const { id, ...updatedCategory } = action.payload;
      const index = state.findIndex((category) => category.id === id);
      if (index !== -1) {
        state[index] = { id, ...updatedCategory };
      }
    });
  },
});
const { reducer } = categorySlice;
export default reducer;
