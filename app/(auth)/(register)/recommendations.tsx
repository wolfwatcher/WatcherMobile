import React from 'react';
import {Button, Page, Text} from '@/components';
import {View} from 'react-native';
import {CinemaRecommendationsSvg} from '@/assets/images';
import {useRouter} from 'expo-router';
import '../../../global.css';

const Recommendations = () => {
  const router = useRouter();
  const handleNext = (withRecommendation: boolean) => {
    // @TODO: proper logic
    router.navigate('/personal');
  };

  return (
    <Page className="px-0 w-full h-full pt-8 pb-8">
      <CinemaRecommendationsSvg className="self-center mb-28" />
      <View className="flex w-full h-full flex-row gap-8">
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

export default Recommendations;
