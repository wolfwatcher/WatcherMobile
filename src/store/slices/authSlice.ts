import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, PURGE} from 'redux-persist';
import {AuthState} from "@/store/states";
import {login as loginRequest} from '@/services/auth';

const initialState: AuthState = {
  token: null,
  refreshToken: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => ({
      ...state,
      token: action.payload.token,
      refreshToken: action.payload.refreshToken,
    }),
    logout: () => initialState,
  },
  // extraReducers: ({addCase}) => {
  //   addCase(PURGE, () => initialState);
  //
  //   // AUTH/LOGIN
  //   addCase(loginRequest.pending, () => ({
  //     ...initialState,
  //     loading: true,
  //   })).addCase(loginRequest.fulfilled, (state, {payload}) => ({
  //     ...state,
  //     token: payload.token,
  //     refreshToken: payload.refreshToken,
  //     loading: false,
  //     error: null,
  //   }));
  //
  //   // TODO: Fix this
  //   // .addCase(loginRequest.rejected, (state, {payload}) => ({
  //   //   ...initialState,
  //   //   error: payload,
  //   // }));
  // },
});

// TODO: Maybe use a secure storage library instead of AsyncStorage
// @see https://github.com/CodingZeal/redux-persist-sensitive-storage
const persistConfig = {
  key: 'auth',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['token', 'refreshToken'],
};

export const {login, logout} = authSlice.actions;
export default persistReducer(persistConfig, authSlice.reducer);
