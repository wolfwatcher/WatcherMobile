import * as React from 'react';
import {store} from '@/store/configureStore';
import {Slot, useRouter, useSegments} from 'expo-router';
import {AppState} from 'react-native';
import {supabase} from '@/services';

const AuthContext = React.createContext<any>(null);

export const useAuth = () => {
  return React.useContext(AuthContext);
};

AppState.addEventListener('change', state => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export const AuthProvider = ({children}: React.PropsWithChildren) => {
  const rootSegment = useSegments()[0];
  const router = useRouter();
  React.useEffect(() => {
    if (!store.getState().auth.token && rootSegment !== '(auth)') {
      router.replace('/(auth)/login');
    } else if (store.getState().auth.token && rootSegment !== '(app)') {
      router.replace('/(app)/home');
    }
  }, [store.getState().auth.token, rootSegment]);

  return (
    <AuthContext.Provider
      value={{
        authentified: store.getState().auth.token != null,
      }}>
      <Slot />
    </AuthContext.Provider>
  );
};
