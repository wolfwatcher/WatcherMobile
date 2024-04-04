import React, {useState} from 'react';
import {Button, Page, Text, TMDBContentCheckbox} from '@/components';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {MOVIES} from '@/data/constants';
import {TMDBMovieType} from '@/types';
import {FavoriteMoviesSvg} from '@/assets/images';
import {useRouter} from 'expo-router';

const FavoriteMovies = () => {
  const [selected, setSelected] = useState([] as number[]);
  const router = useRouter();

  const handleSelect = (value: number) => {
    if (selected.includes(value)) {
      setSelected(selected.filter(item => item !== value));
    } else {
      setSelected(prevState => [...prevState, value]);
    }
  };

  const handleNext = () => {
    // @TODO save selected movies and stuff
    router.navigate('/favorite-series');
  };

  const renderItem: ListRenderItem<TMDBMovieType> = ({item}) => {
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
      <FavoriteMoviesSvg style={styles.header} />
      <FlatList
        data={MOVIES}
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

export default FavoriteMovies;
