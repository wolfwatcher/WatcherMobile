import {NativeStackScreenProps} from 'react-native-screens/native-stack';

import React, {FC, useState} from 'react';
import {Button, Page, Text} from '@/components';
import {View} from 'react-native';
import {useAppDispatch, useAppSelector} from '@/hooks';
import {progress} from '@/store/slices/registerSlice';
import DatePicker from 'react-native-date-picker';
import {RegisterStackParamList} from '@/types';
import {OnboardingAgeSvg} from '@/assets/images';
import {useRouter} from "expo-router";
import "../../../global.css"

const Birthdate = () => {
    const dispatch = useAppDispatch();
    const progression = useAppSelector(state => state.register.progression);

    const [date, setDate] = useState(new Date());
    const router = useRouter();

    const handleNext = () => {
        // TODO proper logic
        dispatch(
            progress({
                ...progression,
                step: progression.step + 1,
            }),
        );
        router.replace("/(auth)/(register)/favorite-content")
    };
    return (
        <Page className="px-0 w-full h-full justify-between items-center py-8">
            <View className="flex-col items-center justify-center gap-8">
                <OnboardingAgeSvg/>
            </View>
            <DatePicker
                date={date}
                onDateChange={setDate}
                mode="date"
            />
            <Button className="mt-6" variant="primary" onPress={handleNext}>
                <Text>Suivant</Text>
            </Button>
        </Page>
    );
};

export default Birthdate;
