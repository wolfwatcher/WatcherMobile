import React, {FC, useState} from 'react';
import {Button, Page, Text} from '@/components';
import {StyleSheet} from 'react-native';
import {OnboardingAgeSvg} from '@/assets/images';
import CustomDatePicker from '@/components/Forms/CustomDatePicker';
import {RegisterStepPropsType} from '@/types';

const Birthdate: FC<RegisterStepPropsType> = ({onNext}) => {
  const today = new Date();
  const [date, setDate] = useState(today);

  const handleNext = () => {
    // @TODO proper logic
    onNext();
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
