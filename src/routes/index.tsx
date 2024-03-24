import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import AppStack, {AppStackParamList} from 'routes/AppStack';
import AuthStack from 'routes/AuthStack';
import {SafeAreaView} from 'react-native';
import {useAppSelector} from 'hooks';
import {AuthStackParamList, RegisterStackParamList} from 'types';
import {colors} from 'styles/theme';

// Type definitions for useNavigatio and stuff
declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends AuthStackParamList,
        AppStackParamList,
        RegisterStackParamList {}
  }
}

const Router = () => {
  const isLoggedIn = !!useAppSelector(state => state.auth.token);

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.background,
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <SafeAreaView className="flex-1 w-full h-full bg-background">
        {isLoggedIn ? <AppStack /> : <AuthStack />}
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Router;
