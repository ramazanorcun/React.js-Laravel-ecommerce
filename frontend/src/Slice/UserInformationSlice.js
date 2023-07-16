import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { addUserInformationService, getUserInformationService } from "../Services/UserInformationService";

export const getUser = createAsyncThunk("user", async () => {
    const response = await getUserInformationService();
    return response;
  });
  export const addUserInformation = createAsyncThunk(
    'addUser',
    async (item) => {
      const response = await addUserInformationService(item);
      console.log(response);
      return  response
    }
  );
 
    const UserInformationSlice = createSlice({
      name: "user",
      initialState: [],
      reducers: {
       
      },
      extraReducers: (builder) => {
        builder.addCase(getUser.fulfilled, (state, action) => {
          return action.payload;
        
        });
        builder.addCase(addUserInformation.fulfilled, (state, action) => {
          state.push(action.payload);

          console.log(action.payload);
        });
       
      },
    });
  const { reducer } = UserInformationSlice;
  export default reducer;