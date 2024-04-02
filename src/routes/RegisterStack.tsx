import React from 'react';
import {Page} from '@/components';
import {
    BirthdateScreen,
    CinemaRecommendationsScreen,
    FavoriteContentScreen,
    FavoriteGenresScreen,
    FavoriteMoviesScreen,
    FavoriteSeriesScreen,
    HatedGenresScreen,
    PersonalInfosScreen,
    SubscriptionsScreen,
} from '@/screens';
import {View} from 'react-native';
import * as Progress from 'react-native-progress';
import {useAppSelector} from '@/hooks';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {RegisterStackParamList, RegisterStepType} from '@/types';
import {ArrowBackwardIcon} from '@/assets/icons';

const Stack = createStackNavigator<RegisterStackParamList>();

export const registerSteps: RegisterStepType[] = [
    {name: 'BirthdateScreen', component: BirthdateScreen},
    {name: 'FavoriteContentScreen', component: FavoriteContentScreen},
    {name: 'FavoriteGenresScreen', component: FavoriteGenresScreen},
    {name: 'HatedGenresScreen', component: HatedGenresScreen},
    {name: 'FavoriteMoviesScreen', component: FavoriteMoviesScreen},
    {name: 'FavoriteSeriesScreen', component: FavoriteSeriesScreen},
    {name: 'SubscriptionsScreen', component: SubscriptionsScreen},
    {name: 'CinemaRecommendationsScreen', component: CinemaRecommendationsScreen},
    {name: 'PersonalInfosScreen', component: PersonalInfosScreen},
];

const RegisterStack = () => {
    const {step, steps} = useAppSelector(state => state.register.progression);

    return (
        <Page>
            <View className="mt-8 flex-row items-center justify-center">
                <ArrowBackwardIcon className="mr-8"/>
                <Progress.Bar
                    progress={step / steps}
                    width={300}
                    color={'white'}
                    unfilledColor={'gray'}
                    borderWidth={0}
                />
            </View>
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: true,
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS,
                }}>
                {registerSteps.map(({name, component}) => (
                    <Stack.Screen key={name} name={name} component={component}/>
                ))}
            </Stack.Navigator>
        </Page>
    );
};

export default RegisterStack;
