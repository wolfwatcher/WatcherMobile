import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import {RegisterStateType} from '@/store/states';

export const initialState: RegisterStateType = {
  step: 0,
  birthdate: new Date().toISOString().split('T')[0],
  favoriteContent: [],
  favoriteGenres: [],
  hatedGenres: [],
  favoriteMovies: [],
  favoriteSeries: [],
  subscriptions: [],
  onlySubscriptions: false,
  withRecommendations: false,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    progress: (state, action) => {
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
