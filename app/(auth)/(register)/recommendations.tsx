import React from 'react';
import {Button, Page, Text} from '@/components';
import {StyleSheet, View} from 'react-native';
import {CinemaRecommendationsSvg} from '@/assets/images';
import {useLocalSearchParams, useRouter} from 'expo-router';
import {useAppDispatch, useAppSelector} from '@/hooks';
import {progress} from '@/store/slices/registerSlice';

const Recommendations = () => {
  const dispatch = useAppDispatch();
  const progression = useAppSelector(state => state.register.progression);
  const router = useRouter();
  const {step} = useLocalSearchParams<{step: string}>();

  const handleNext = (withRecommendation: boolean) => {
    // @TODO: proper logic
    dispatch(
      progress({
        ...progression,
        step: step !== undefined ? parseInt(step) + 1 : 0,
      }),
    );
    router.navigate('/personal');
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
