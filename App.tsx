import React, {JSX} from 'react';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Router from '@/routes';
import {Provider as ReduxProvider} from 'react-redux';
import {persistor, store} from '@/store';
import {PersistGate} from 'redux-persist/integration/react';

function App(): JSX.Element {

    return (
        <ReduxProvider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <SafeAreaProvider>
                    <Router/>
                    <StatusBar style="auto"/>
                </SafeAreaProvider>
            </PersistGate>
        </ReduxProvider>
    );
}

export default App;
