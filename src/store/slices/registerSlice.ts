import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import {RegisterStateType} from '@/store/states';
import {registerSteps} from "@/store/steps";

const initialState: RegisterStateType = {
  progression: {
    steps: registerSteps.length,
    step: 0,
  },
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    progress: (state, action) => ({
      ...state,
      progression: {
        ...state.progression,
        ...action.payload,
      },
    }),
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
