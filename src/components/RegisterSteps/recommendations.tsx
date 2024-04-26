import React, {FC} from 'react';
import Text from '@/components/Texts/Text';
import Page from '@/components/Pages/Page';
import Button from '@/components/Buttons/Button';
import {StyleSheet, View} from 'react-native';
import {CinemaRecommendationsSvg} from '@/assets/images';
import {RegisterStepPropsType} from '@/types';

const Recommendations: FC<RegisterStepPropsType> = ({onNext}) => {
  const handleNext = (withRecommendation: boolean) => {
    onNext({recommendations: withRecommendation});
  };

  return (
    <Page style={styles.page}>
      <CinemaRecommendationsSvg style={styles.header} />
      <View style={styles.container}>
        <Button
          style={styles.recommendationButton}
          variant="success"
          onPress={() => handleNext(true)}>
          <Text>Oui</Text>
        </Button>
        <Button
          style={styles.recommendationButton}
          variant="error"
          onPress={() => handleNext(false)}>
          <Text>Non</Text>
        </Button>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 0,
    paddingVertical: 32,
  },
  header: {
    alignSelf: 'center',
    marginBottom: 100,
  },
  container: {
    flexDirection: 'row',
    gap: 32,
  },
  recommendationButton: {
    flex: 1,
    flexGrow: 1,
  },
  nextButton: {
    marginTop: 24,
  },
});

export default Recommendations;
