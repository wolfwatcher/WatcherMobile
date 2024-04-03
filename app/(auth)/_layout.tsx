import "../../global.css"
import {Stack} from "expo-router/stack";

import React from "react";

const AuthLayout = () => {
    return (
        <Stack
            screenOptions={{
                gestureEnabled: true,
                headerShown: false,
            }}>
            <Stack.Screen name="login"/>
            <Stack.Screen name="register"/>
        </Stack>
    )
}

export default AuthLayout;
