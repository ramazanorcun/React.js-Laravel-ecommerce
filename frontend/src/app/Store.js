import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Slice/AuthSlice'
import messageReducer from '../Slice/Message'
import categorReducer from '../Slice/CategoriesSlice'
import subCategoryReducer from '../Slice/SubCategoriesSlice'
import productReducer from '../Slice/ProductSlice'
import userInformationReducer from '../Slice/UserInformationSlice'

 
const reducer = {
  auth: authReducer,
  message: messageReducer,
  subCategory:subCategoryReducer,
  category:categorReducer,
  product:productReducer,
  userInformation:userInformationReducer
  }
  const store = configureStore({
    reducer: reducer,
    devTools: true,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    
  })
  export default store;