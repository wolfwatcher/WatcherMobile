import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '@/screens';

export type AppStackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
