import React, {useState} from 'react';
import {Button, Page, Text} from '@/components';
import {StyleSheet, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '@/hooks';
import {progress} from '@/store/slices/registerSlice';
import {OnboardingAgeSvg} from '@/assets/images';
import {useRouter} from 'expo-router';
import CustomDatePicker from '@/components/Forms/CustomDatePicker';

const Birthdate = () => {
  const dispatch = useAppDispatch();
  const progression = useAppSelector(state => state.register.progression);

  const [date, setDate] = useState(new Date());
  const router = useRouter();

  const handleNext = () => {
    // TODO proper logic
    dispatch(
      progress({
        ...progression,
        step: progression.step + 1,
      }),
    );
    router.navigate('/(auth)/(tabs)/favorite-content');
  };
  return (
    <Page style={styles.page}>
      <View style={styles.view}>
        <OnboardingAgeSvg />
      </View>
      <CustomDatePicker
        date={date}
        placeholder={'Veuillez entre votre date de naissance'}
      />
      <Button
        style={{
          marginTop: 24,
        }}
        variant="primary"
        onPress={handleNext}>
        <Text>Suivant</Text>
      </Button>
    </Page>
  );
};

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 0,
    paddingVertical: 32,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  view: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32,
  },
});

export default Birthdate;
