import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import {SessionState} from '@/store/states';

const initialState: SessionState = {
  session: null,
  loading: false,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    set: (state, action) => {
      return {
        ...state,
        session: action.payload.session,
      };
    },
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
  key: 'session',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['session'],
};

export const {set} = sessionSlice.actions;
export default persistReducer(persistConfig, sessionSlice.reducer);
