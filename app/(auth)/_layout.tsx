import '../../global.css';
import {Stack} from 'expo-router/stack';

import React from 'react';

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
      }}>
      <Stack.Screen name="login" options={{headerShown: false}} />
      <Stack.Screen name="(register)" options={{headerShown: false}} />
    </Stack>
  );
};

export default AuthLayout;
