import React, {useState} from 'react';
import {Button, LineCheckbox, Page, Text} from '@/components';
import {StyleSheet, View} from 'react-native';
import {FavoriteContentSvg} from '@/assets/images';
import {useLocalSearchParams, useRouter} from 'expo-router';
import {progress} from '@/store/slices/registerSlice';
import {useAppDispatch, useAppSelector} from '@/hooks';

const FavoriteContent = () => {
  const dispatch = useAppDispatch();
  const progression = useAppSelector(state => state.register.progression);
  const router = useRouter();
  const {step} = useLocalSearchParams<{step: string}>();

  const [selected, setSelected] = useState([] as string[]);

  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      setSelected(selected.filter(item => item !== value));
    } else {
      setSelected(prevState => [...prevState, value]);
    }
  };

  const handleNext = () => {
    // @TODO proper logic
    dispatch(
      progress({
        ...progression,
        step: step !== undefined ? parseInt(step) + 1 : 0,
      }),
    );
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
