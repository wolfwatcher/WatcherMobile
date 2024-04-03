import authReducer from '@/store/slices/authSlice';
import registerReducer from '@/store/slices/registerSlice';
import {combineReducers} from "@reduxjs/toolkit";

export default combineReducers({auth: authReducer, register: registerReducer});
