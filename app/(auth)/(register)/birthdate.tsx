import React, {useState} from 'react';
import {Button, Page, Text} from '@/components';
import {StyleSheet} from 'react-native';
import {useAppDispatch, useAppSelector} from '@/hooks';
import {progress} from '@/store/slices/registerSlice';
import {OnboardingAgeSvg} from '@/assets/images';
import {useRouter} from 'expo-router';
import CustomDatePicker from '@/components/Forms/CustomDatePicker';

const Birthdate = () => {
  const dispatch = useAppDispatch();
  const progression = useAppSelector(state => state.register.progression);

  const today = new Date();
  const [date, setDate] = useState(today);
  const router = useRouter();

  const handleNext = () => {
    // TODO proper logic
    dispatch(
      progress({
        ...progression,
        step: progression.step + 1,
      }),
    );
    router.navigate('/favorite-content');
  };
  return (
    <Page style={styles.page}>
      <OnboardingAgeSvg />
      <CustomDatePicker date={date} onDateChange={setDate} />
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
    paddingVertical: 32,
    paddingHorizontal: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Birthdate;
