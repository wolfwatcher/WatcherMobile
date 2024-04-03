import "../../global.css"

import React from 'react';
import {Page} from '@/components';
import {View} from 'react-native';
import * as Progress from 'react-native-progress';
import {useAppSelector} from '@/hooks';
import {ArrowBackwardIcon} from '@/assets/icons';
import {Stack} from "expo-router/stack";

const Register = () => {
    const {step, steps} = useAppSelector(state => state.register.progression);

    return (
        <Page>
            <View className="mt-8 flex-row items-center justify-center w-full h-full">
                <ArrowBackwardIcon className="mr-8"/>
                <Progress.Bar
                    progress={step / steps}
                    width={300}
                    color={'white'}
                    unfilledColor={'gray'}
                    borderWidth={0}
                />
            </View>
            <Stack
                screenOptions={{
                    gestureEnabled: true,
                    headerShown: false
                }}>
                {/*{registerSteps.map(({name}) => (*/}
                {/*    <Stack.Screen key={name} name={name}/>*/}
                {/*))}*/}
                <Stack.Screen name="(register)/birthdate"/>
            </Stack>
        </Page>
    );
};

export default Register;
