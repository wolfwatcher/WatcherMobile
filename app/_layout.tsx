import "../global.css"

import {Slot, SplashScreen} from "expo-router";
import {useFonts} from "expo-font";
import React, {useEffect} from "react";
import {DarkTheme, DefaultTheme, ThemeProvider} from "@react-navigation/native";
import {persistor, store} from "@/store/configureStore";
import {StatusBar} from "expo-status-bar";
import {Provider as ReduxProvider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';
import {useColorScheme} from "nativewind";
import {AuthProvider} from "@/context/auth";
import {View} from "react-native";

export {
    ErrorBoundary
} from 'expo-router'

SplashScreen.preventAutoHideAsync();

export default () => {
    const [loaded, error] = useFonts({
        "avenir": require("@/assets/fonts/Avenir-Regular.otf"),
        "avenir-black": require("@/assets/fonts/Avenir-Black.otf")
    })

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

    return <RootLayout/>
}

const RootLayout = () => {
    const {colorScheme} = useColorScheme();
    return (
        <View className="flex-1 w-full h-full">
            <ThemeProvider value={DarkTheme}>
                <ReduxProvider store={store}>
                    <PersistGate persistor={persistor} loading={null}>
                        <AuthProvider>
                            <Slot/>
                            <StatusBar style="auto"/>
                        </AuthProvider>
                    </PersistGate>
                </ReduxProvider>
            </ThemeProvider>
        </View>
    )
}
