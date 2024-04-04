import React, {useState} from 'react';
import {Button, LineCheckbox, Page, Text} from '@/components';
import {StyleSheet, View} from 'react-native';
import {FavoriteContentSvg} from '@/assets/images';
import {useRouter} from 'expo-router';

const FavoriteContent = () => {
  const [selected, setSelected] = useState([] as string[]);

  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      setSelected(selected.filter(item => item !== value));
    } else {
      setSelected(prevState => [...prevState, value]);
    }
  };

  const router = useRouter();

  const handleNext = () => {
    // @TODO proper logic
    router.navigate('/favorite-genres');
  };

  return (
    <Page style={styles.page}>
      <FavoriteContentSvg />
      <View style={styles.container}>
        <LineCheckbox
          style={{marginBottom: 24, marginTop: 96}}
          text="Films"
          onPress={() => handleSelect('films')}
        />
        <LineCheckbox text="Séries" onPress={() => handleSelect('series')} />
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
