import React, {useEffect} from 'react';
import {useRouter} from 'expo-router';
import {BackHandler, TouchableOpacity, View} from 'react-native';
import {ArrowBackwardIcon} from '@/assets/icons';
import * as Progress from 'react-native-progress';
import {Page} from '@/components';
import {useAppDispatch, useAppSelector} from '@/hooks';
import {Stack} from 'expo-router/stack';
import {registerSteps} from '@/store/steps';
import {initialState, progress} from '@/store/slices/registerSlice';

const RegisterLayout = () => {
  const {step, steps} = useAppSelector(state => state.register.progression);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(progress(initialState.progression));
    const onBackPress = () => {
      handlePreviousStep();
      return true;
    };

    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );

    return () => subscription.remove();
  }, []);

  const handleBack = () => {
    handlePreviousStep();
  };

  const handlePreviousStep = () => {
    dispatch(
      progress({
        step: step - 1,
        steps,
      }),
    );
    router.back();
  };

  return (
    <Page>
      <View
        style={{
          marginTop: 64,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'transparent',
            width: 'auto',
            padding: 0,
            marginRight: 32,
          }}
          onPress={handleBack}>
          <ArrowBackwardIcon />
        </TouchableOpacity>
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
          headerShown: false,
        }}>
        {registerSteps.map(({name}, index) => (
          <Stack.Screen
            key={name}
            name={name}
            initialParams={{step: index}}
            options={{headerShown: false}}
          />
        ))}
      </Stack>
    </Page>
  );
};

export default RegisterLayout;
