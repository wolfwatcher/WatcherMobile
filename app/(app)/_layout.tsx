import "../../global.css"
import {Stack} from "expo-router/stack";
import React from "react";

export default () => {
    return (
        <Stack
            screenOptions={{
                gestureEnabled: true,
                headerShown: false,
            }}>
            <Stack.Screen name="home"/>
        </Stack>
    )
}
