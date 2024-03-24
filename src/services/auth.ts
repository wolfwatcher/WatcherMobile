import {createAsyncThunk} from '@reduxjs/toolkit';
import client from 'helpers/api';
import {ApiError, AuthResponse, LoginParams} from 'types';

export const login = createAsyncThunk<
  AuthResponse,
  LoginParams,
  {rejectValue: ApiError}
>('auth/login', async (params: LoginParams, {rejectWithValue}) => {
  try {
    const resp = await client.post<AuthResponse>('auth/login', params);
    return resp.data;
  } catch (error) {
    return rejectWithValue(error as ApiError);
  }
});
