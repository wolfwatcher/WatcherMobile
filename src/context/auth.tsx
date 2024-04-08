import {Slot, useRouter, useSegments} from 'expo-router';
import {AppState} from 'react-native';
import {supabase} from '@/services';
import {useAppSelector} from '@/hooks';
import {createContext, PropsWithChildren, useContext, useEffect} from 'react';

const AuthContext = createContext<any>(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

AppState.addEventListener('change', state => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export const AuthProvider = ({children}: PropsWithChildren) => {
  const {token} = useAppSelector(state => state.auth);

  const rootSegment = useSegments()[0];
  const router = useRouter();

  useEffect(() => {
    if (!token && rootSegment !== '(auth)') {
      router.replace('/(auth)/login');
    } else if (token && rootSegment !== '(app)') {
      router.replace('/(app)/home');
    }
  }, [token, rootSegment]);

  return (
    <AuthContext.Provider
      value={{
        authentified: token != null,
      }}>
      <Slot />
    </AuthContext.Provider>
  );
};
