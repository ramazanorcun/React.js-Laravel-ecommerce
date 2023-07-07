import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addSubCategoriesService,
  deleteSubCategoriesService,
  getSubCategoriesService,
  updateSubCategoriesService,
} from "../Services/SubCategoriesServices";

//dispacth ile çağırmak için
//thunk  store dönen veriyi eklemek için kullanılır
export const getSubCategories = createAsyncThunk("subCategory", async () => {
  const response = await getSubCategoriesService();
  return response;
});
export const addSubCategories = createAsyncThunk(
  'addSubCategory',
  async (subCategory) => {
    const response = await addSubCategoriesService(subCategory);
    console.log(response);
    return  response
  }
);

export const deleteSubCategories = createAsyncThunk(
  'deleteSubCategory',
  async (subCategoryId) => {
    return await deleteSubCategoriesService(subCategoryId);
  }
);
export const updateSubCategories = createAsyncThunk(
  'updateSubCategory',
  async (updateSubId) => {
    return await updateSubCategoriesService(updateSubId);
  }
);
  const subCategorySlice = createSlice({
    name: "subCategory",
    initialState: [],
    reducers: {
      setSubCategories: (state, action) => {
        return action.payload;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(getSubCategories.fulfilled, (state, action) => {
        return action.payload;
      
      });

      builder.addCase(addSubCategories.fulfilled, (state, action) => {
        state.push(action.payload);
      });
    

      builder.addCase(deleteSubCategories.fulfilled, (state, action) => {
        let index = state.findIndex((subCategory) => subCategory.id === action.payload.id);
        state.splice(index, 1);
      });

      builder.addCase(updateSubCategories.fulfilled, (state, action) => {
        const { id, ...updatedSubCategory } = action.payload;
        const index = state.findIndex((subCategory) => subCategory.id === id);
        if (index !== -1) {
          state[index] = { id, ...updatedSubCategory };
        }
      });
    },
  });
export const { setSubCategories } = subCategorySlice.actions;
const { reducer } = subCategorySlice;
export default reducer;

