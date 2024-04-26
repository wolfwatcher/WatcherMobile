import React from 'react';
import {Stack} from 'expo-router/stack';

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
      }}
    >
      <Stack.Screen name="login" options={{headerShown: false}} />
      <Stack.Screen name="register" options={{headerShown: false}} />
      <Stack.Screen
        name="modal"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: 'modal',
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
