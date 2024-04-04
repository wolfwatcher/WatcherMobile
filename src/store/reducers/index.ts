import authReducer from '@/store/slices/authSlice';
import registerReducer from '@/store/slices/registerSlice';
import sessionReducer from '@/store/slices/sessionSlice';
import {combineReducers} from '@reduxjs/toolkit';

export default combineReducers({
  auth: authReducer,
  register: registerReducer,
  session: sessionReducer,
});
