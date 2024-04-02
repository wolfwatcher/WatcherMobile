import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '@/screens';
import RegisterStack from '@/routes/RegisterStack';
import {AuthStackParamList} from '@/types';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterStack} />
    </Stack.Navigator>
  );
};

export default AuthStack;
