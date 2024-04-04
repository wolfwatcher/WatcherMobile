import React, {useState} from 'react';
import {BoxCheckbox, Button, Page, Text} from '@/components';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {GenreItemType} from '@/types';
import {GENRES} from '@/data/constants';
import {FavoriteGenresSvg} from '@/assets/images';
import {useRouter} from 'expo-router';

const FavoriteGenres = () => {
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
    router.navigate('/hated-genres');
  };

  const renderItem: ListRenderItem<GenreItemType> = ({item}) => {
    return (
      <BoxCheckbox
        style={styles.boxCheckbox}
        color="success"
        checked={selected.includes(item.genre)}
        onPress={() => handleSelect(item.genre)}>
        <Text>{item.genre}</Text>
        <Text style={styles.boxCheckboxText}>{item.emoji}</Text>
      </BoxCheckbox>
    );
  };

  return (
    <Page style={styles.page}>
      <FavoriteGenresSvg style={styles.header} />
      <FlatList
        data={GENRES}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={item => item.genre}
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
    flex: 1,
    flexDirection: 'column',
  },
  nextButton: {
    marginTop: 24,
  },
  boxCheckbox: {
    marginHorizontal: 8,
    marginBottom: 16,
  },
  boxCheckboxText: {
    marginLeft: 8,
  },
});

export default FavoriteGenres;
