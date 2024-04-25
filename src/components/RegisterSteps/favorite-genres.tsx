import React, {FC, useState} from 'react';
import Text from '@/components/Texts/Text';
import Page from '@/components/Pages/Page';
import Button from '@/components/Buttons/Button';
import BoxCheckbox from '@/components/Checkboxes/BoxCheckbox';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {GenreItemType, RegisterStepPropsType} from '@/types';
import {GENRES} from '@/data/constants';
import {FavoriteGenresSvg} from '@/assets/images';

const FavoriteGenres: FC<RegisterStepPropsType> = ({
  onNext,
  progression: {favoriteGenres},
}) => {
  const [selected, setSelected] = useState(favoriteGenres);

  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      setSelected(selected.filter(item => item !== value));
    } else {
      setSelected(prevState => [...prevState, value]);
    }
  };

  const handleNext = () => {
    onNext({favoriteGenres: selected});
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
