import React, {FC, useState} from 'react';
import {Button, LineCheckbox, Page, Text} from '@/components';
import {StyleSheet, View} from 'react-native';
import {FavoriteContentSvg} from '@/assets/images';
import {RegisterStepPropsType} from '@/types';

const FavoriteContent: FC<RegisterStepPropsType> = ({
  onNext,
  progression: {favoriteContent},
}) => {
  const [selected, setSelected] = useState(favoriteContent);

  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      setSelected(selected.filter(item => item !== value));
    } else {
      setSelected(prevState => [...prevState, value]);
    }
  };

  const handleNext = () => {
    onNext({favoriteContent: selected});
  };

  return (
    <Page style={styles.page}>
      <FavoriteContentSvg />
      <View style={styles.container}>
        <LineCheckbox
          style={{marginBottom: 24, marginTop: 96}}
          text="Films"
          onPress={() => handleSelect('films')}
          isChecked={selected.includes('films')}
        />
        <LineCheckbox
          text="Séries"
          onPress={() => handleSelect('series')}
          isChecked={selected.includes('series')}
        />
      </View>
      <Button variant="primary" onPress={handleNext}>
        <Text>Suivant</Text>
      </Button>
    </Page>
  );
};

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 0,
    paddingVertical: 32,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default FavoriteContent;
