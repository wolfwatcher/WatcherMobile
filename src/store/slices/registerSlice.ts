import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import {RegisterStateType} from '@/store/states';

export const initialState: RegisterStateType = {
  step: 0,
  birthdate: undefined,
  favoriteContent: [],
  favoriteGenres: [],
  hatedGenres: [],
  favoriteMovies: [],
  favoriteSeries: [],
  subscriptions: [],
  withRecommendations: undefined,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    progress: (state, action) => {
      console.log('action', action);
      console.log('state', state);
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

const persistConfig = {
  key: 'register',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['progression'],
};

export const {progress} = registerSlice.actions;
export default persistReducer(persistConfig, registerSlice.reducer);
