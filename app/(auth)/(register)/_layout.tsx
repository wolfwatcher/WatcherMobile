import React from 'react';
import {useRouter} from 'expo-router';
import {TouchableOpacity, View} from 'react-native';
import {ArrowBackwardIcon} from '@/assets/icons';
import * as Progress from 'react-native-progress';
import {Page} from '@/components';
import {useAppSelector} from '@/hooks';
import {Stack} from 'expo-router/stack';
import {registerSteps} from '@/store/steps';

const RegisterLayout = () => {
  const {step, steps} = useAppSelector(state => state.register.progression);

  const router = useRouter();

  const handleBack = () => {
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
        {registerSteps.map(({name}) => (
          <Stack.Screen key={name} name={name} options={{headerShown: false}} />
        ))}
      </Stack>
    </Page>
  );
};

export default RegisterLayout;
