import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as AuthService from "../Services/AuthService.js";
import { setMessage } from "./Message.js";

const user = JSON.parse(localStorage.getItem("user"));
export const register = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await AuthService.register({ name, email, password });
      thunkAPI.dispatch(setMessage(response.data.message));
      

      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(error.message);

      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await AuthService.login({ email, password });
      
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      thunkAPI.dispatch(setMessage(message));
    

    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});

  const authSlice = createSlice({
    name: 'auth',
    initialState: user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(register.fulfilled, (state, action) => {
          state.isLoggedIn = true;
          state.user = action.payload.user;
        })
        .addCase(register.rejected, (state, action) => {
          state.error = action.payload;
        })
        .addCase(login.fulfilled, (state, action) => {
          state.isLoggedIn = true;
          state.user = action.payload.user;
        })
        .addCase(logout.fulfilled, (state, action) => {
          state.isLoggedIn = false;
          state.user = null;
        });
    },
  });

const { reducer } = authSlice;
export default reducer;
