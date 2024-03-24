import React, {JSX, useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Router from 'routes';
import {Provider as ReduxProvider} from 'react-redux';
import {persistor, store} from 'store';
import {PersistGate} from 'redux-persist/integration/react';
import BootSplash from 'react-native-bootsplash';

function App(): JSX.Element {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return (
    <ReduxProvider store={store}>
      {/* TODO : Add loading screen */}
      <PersistGate persistor={persistor} loading={null}>
        <SafeAreaProvider>
          <Router />
        </SafeAreaProvider>
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
