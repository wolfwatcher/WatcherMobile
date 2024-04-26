import '../../global.css';
import {Stack} from 'expo-router/stack';
import React, {useEffect} from 'react';

import {useAppDispatch} from '@/hooks';
import {supabase} from '@/services';
import {set} from '@/store/slices/sessionSlice';

const AppLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      dispatch(
        set({
          session,
        }),
      );
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      dispatch(
        set({
          session,
        }),
      );
    });
  }, []);

  return (
    <Stack
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
      }}>
      <Stack.Screen name="home" />
    </Stack>
  );
};

export default AppLayout;
