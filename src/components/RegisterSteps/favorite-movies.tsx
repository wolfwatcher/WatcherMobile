import React, {FC, useState} from 'react';
import Page from '@/components/Pages/Page';
import Button from '@/components/Buttons/Button';
import Text from '@/components/Texts/Text';
import TMDBContentCheckbox from '@/components/Checkboxes/TMDBContentCheckbox';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {MOVIES} from '@/data/constants';
import {RegisterStepPropsType, TMDBMovieType} from '@/types';
import {FavoriteMoviesSvg} from '@/assets/images';

const FavoriteMovies: FC<RegisterStepPropsType> = ({
  onNext,
  progression: {favoriteMovies},
}) => {
  const [selected, setSelected] = useState(favoriteMovies);

  const handleSelect = (value: number) => {
    if (selected.includes(value)) {
      setSelected(selected.filter(item => item !== value));
    } else {
      setSelected(prevState => [...prevState, value]);
    }
  };

  const handleNext = () => {
    onNext({favoriteMovies: selected});
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
