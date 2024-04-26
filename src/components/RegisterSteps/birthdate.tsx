import React, {FC, useState} from 'react';
import Page from '@/components/Pages/Page';
import Button from '@/components/Buttons/Button';
import Text from '@/components/Texts/Text';
import {StyleSheet} from 'react-native';
import {OnboardingAgeSvg} from '@/assets/images';
import CustomDatePicker from '@/components/Forms/CustomDatePicker';
import {RegisterStepPropsType} from '@/types';

const Birthdate: FC<RegisterStepPropsType> = ({onNext, progression}) => {
  const [date, setDate] = useState(new Date(progression.birthdate));

  const handleNext = () => {
    onNext({birthdate: date.toISOString().split('T')[0]});
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
