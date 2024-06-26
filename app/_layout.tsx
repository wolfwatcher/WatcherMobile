import '../global.css';

import {Slot, SplashScreen} from 'expo-router';
import {useFonts} from 'expo-font';
import React, {useEffect} from 'react';
import {ThemeProvider, useTheme} from '@react-navigation/native';
import {persistor, store} from '@/store/configureStore';
import {StatusBar} from 'expo-status-bar';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {AuthProvider} from '@/context/auth';
import {View} from 'react-native';
import {colors} from '@/styles/theme';

export {ErrorBoundary} from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default () => {
  const [loaded, error] = useFonts({
    avenir: require('@/assets/fonts/Avenir-Regular.otf'),
    'avenir-black': require('@/assets/fonts/Avenir-Black.otf'),
    'avenir-light': require('@/assets/fonts/Avenir-Light.otf'),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayout />;
};

const RootLayout = () => {
  const customTheme = useTheme();
  customTheme.colors = colors;

  return (
    <ThemeProvider value={customTheme}>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <AuthProvider>
            <View
              style={{
                display: 'flex',
                flex: 1,
                width: '100%',
                height: '100%',
              }}>
              <Slot />
              <StatusBar style="auto" />
            </View>
          </AuthProvider>
        </PersistGate>
      </ReduxProvider>
    </ThemeProvider>
  );
};
