import React, {useEffect} from 'react';
import {BackHandler, TouchableOpacity, View} from 'react-native';
import {ArrowBackwardIcon} from '@/assets/icons';
import * as Progress from 'react-native-progress';
import {
  BirthdateStep,
  FavoriteContentStep,
  FavoriteGenresStep,
  FavoriteMoviesStep,
  FavoriteSeriesStep,
  HatedGenresStep,
  Page,
  PersonalStep,
  RecommandationsStep,
  SubscriptionsStep,
} from '@/components';
import {useAppDispatch, useAppSelector} from '@/hooks';
import {initialState, progress} from '@/store/slices/registerSlice';
import {router} from 'expo-router';

const RegisterLayout = () => {
  const progression = useAppSelector(state => state.register);
  const dispatch = useAppDispatch();

  const handleStepNavigation = (offset: number, payload: {} = {}) => {
    dispatch(progress({step: progression.step + offset, ...payload}));
  };

  useEffect(() => {
    const onBackPress = () => {
      handleBack();
      return true;
    };

    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );
    return () => subscription.remove();
  }, [progression]);

  const handleBack = () => {
    if (progression.step === 0) {
      dispatch(progress(initialState));
      router.navigate('auth/login');
      return;
    }
    handleStepNavigation(-1);
  };

  const registerSteps = [
    BirthdateStep,
    FavoriteContentStep,
    FavoriteGenresStep,
    HatedGenresStep,
    FavoriteMoviesStep,
    FavoriteSeriesStep,
    SubscriptionsStep,
    RecommandationsStep,
    PersonalStep,
  ];

  const renderStep = () => {
    const {step} = progression;
    const Component = registerSteps[step];
    return (
      <Component
        onNext={(payload: {} = {}) => handleStepNavigation(1, payload)}
        progression={progression}
      />
    );
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
          progress={progression.step / registerSteps.length}
          width={300}
          color={'white'}
          unfilledColor={'gray'}
          borderWidth={0}
        />
      </View>
      <>{renderStep()}</>
    </Page>
  );
};

export default RegisterLayout;
