import React, {FC} from 'react';
import {Button, Page, Text} from 'components';
import {View} from 'react-native';
import {RegisterStackParamList} from 'types';
import {CinemaRecommendationsSvg} from 'assets/images';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';

const CinemaRecommendations: FC<
  NativeStackScreenProps<RegisterStackParamList, 'SubscriptionsScreen'>
> = ({navigation}) => {
  const handleNext = (withRecommendation: boolean) => {
    // @TODO: proper logic
    navigation.navigate('PersonalInfosScreen');
  };

  return (
    <Page className="px-0 pt-8 pb-8">
      <CinemaRecommendationsSvg className="self-center mb-28" />
      <View className="flex flex-row gap-8">
        <Button
          className="flex-1"
          variant="success"
          onPress={() => handleNext(true)}>
          <Text>Oui</Text>
        </Button>
        <Button
          className="flex-1"
          variant="error"
          onPress={() => handleNext(false)}>
          <Text>Non</Text>
        </Button>
      </View>
    </Page>
  );
};

export default CinemaRecommendations;
