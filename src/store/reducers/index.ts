import authReducer from '@/store/slices/authSlice';
import registerReducer from '@/store/slices/registerSlice';

export default {
  auth: authReducer,
  register: registerReducer,
};
