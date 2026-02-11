import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from "./slices/userSlice";
import expertsReducer from './slices/expertsSlice';
import adminReducer from './slices/adminSlice'; 

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    experts: expertsReducer,
    admin: adminReducer, 
  },
});

export default store;