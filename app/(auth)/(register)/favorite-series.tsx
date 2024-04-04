import React, {useState} from 'react';
import {Button, Page, Text, TMDBContentCheckbox} from '@/components';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {SERIES} from '@/data/constants';
import {TMDBSerieType} from '@/types';
import {FavoriteSeriseSvg} from '@/assets/images';
import {useLocalSearchParams, useRouter} from 'expo-router';
import {useAppDispatch, useAppSelector} from '@/hooks';
import {progress} from '@/store/slices/registerSlice';

const FavoriteSeries = () => {
  const dispatch = useAppDispatch();
  const progression = useAppSelector(state => state.register.progression);
  const router = useRouter();
  const {step} = useLocalSearchParams<{step: string}>();

  const [selected, setSelected] = useState([] as number[]);

  const handleSelect = (value: number) => {
    if (selected.includes(value)) {
      setSelected(selected.filter(item => item !== value));
    } else {
      setSelected(prevState => [...prevState, value]);
    }
  };

  const handleNext = () => {
    // @TODO save selected movies and stuff
    dispatch(
      progress({
        ...progression,
        step: step !== undefined ? parseInt(step) + 1 : 0,
      }),
    );
    router.navigate('/subscriptions');
  };

  const renderItem: ListRenderItem<TMDBSerieType> = ({item}) => {
    return (
      <TMDBContentCheckbox
        item={item}
        isChecked={selected.includes(item.id)}
        onPress={() => handleSelect(item.id)}
      />
    );
  };

  return (
    <Page style={styles.page}>
      <FavoriteSeriseSvg style={styles.header} />
      <FlatList
        data={SERIES}
        contentContainerStyle={styles.container}
        renderItem={renderItem}
        numColumns={1}
        keyExtractor={item => item.id.toString()}
      />
      <Button style={styles.nextButton} variant="primary" onPress={handleNext}>
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
  header: {
    alignSelf: 'center',
    marginBottom: 32,
  },
  container: {
    gap: 24,
  },
  nextButton: {
    marginTop: 24,
  },
});

export default FavoriteSeries;
