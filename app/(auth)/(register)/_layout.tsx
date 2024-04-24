import React, {useEffect} from 'react';
import {BackHandler, TouchableOpacity, View} from 'react-native';
import {ArrowBackwardIcon} from '@/assets/icons';
import * as Progress from 'react-native-progress';
import {Page} from '@/components';
import {useAppDispatch, useAppSelector} from '@/hooks';
import Birthdate from './birthdate';
import FavoriteContent from './favorite-content';
import FavoriteGenres from './favorite-genres';
import FavoriteMovies from './favorite-movies';
import FavoriteSeries from './favorite-series';
import {progress} from '@/store/slices/registerSlice';
import HatedGenres from './hated-genres';
import Subscriptions from './subscriptions';
import Recommendations from './recommendations';
import Personal from './personal';
import {router} from 'expo-router';

const RegisterLayout = () => {
  const progression = useAppSelector(state => state.register);
  const dispatch = useAppDispatch();

  const handlePreviousStep = () => {
    dispatch(progress({step: progression.step - 1}));
    return;
  };

  const handleNextStep = () => {
    dispatch(progress({step: progression.step + 1}));
    return;
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
      router.navigate('auth/login');
      return;
    }
    handlePreviousStep();
  };

  const registerSteps = [
    Birthdate,
    FavoriteContent,
    FavoriteGenres,
    HatedGenres,
    FavoriteMovies,
    FavoriteSeries,
    Subscriptions,
    Recommendations,
    Personal,
  ];

  const renderStep = () => {
    const {step} = progression;
    const Component = registerSteps[step];
    return <Component onNext={handleNextStep} />;
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
