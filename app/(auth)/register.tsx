import '../../global.css';

import React from 'react';
import {Page} from '@/components';
import {TouchableOpacity, View} from 'react-native';
import * as Progress from 'react-native-progress';
import {useAppSelector} from '@/hooks';
import {ArrowBackwardIcon} from '@/assets/icons';
import {useRouter} from 'expo-router';

const Register = () => {
  const {step, steps} = useAppSelector(state => state.register.progression);

  const router = useRouter();

  const handleBack = () => {
    router.navigate('(auth)/login');
  };

  return (
    <Page>
      <View
        style={{
          marginTop: 32,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
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
      {/*<Stack*/}
      {/*  screenOptions={{*/}
      {/*    gestureEnabled: true,*/}
      {/*    headerShown: false,*/}
      {/*  }}>*/}
      {/*  /!*TODO: DO REGISTER STEPS*!/*/}
      {/*  /!*{registerSteps.map(({name}) => (*!/*/}
      {/*  /!*    <Stack.Screen key={name} name={name}/>*!/*/}
      {/*  /!*))}*!/*/}
      {/*  <Stack.Screen name="(tabs)" options={{headerShown: false}} />*/}
      {/*</Stack>*/}
    </Page>
  );
};

export default Register;
