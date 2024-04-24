import React, {FC, useState} from 'react';
import {BoxCheckbox, Button, Page, Text} from '@/components';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {GenreItemType, RegisterStepPropsType} from '@/types';
import {GENRES} from '@/data/constants';
import {HatedGenresSvg} from '@/assets/images';

const HatedGenres: FC<RegisterStepPropsType> = ({onNext}) => {
  const [selected, setSelected] = useState([] as string[]);

  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      setSelected(selected.filter(item => item !== value));
    } else {
      setSelected(prevState => [...prevState, value]);
    }
  };

  const handleNext = () => {
    // @TODO: save hated genres and stuff
    onNext();
  };

  const renderItem: ListRenderItem<GenreItemType> = ({item}) => {
    return (
      <BoxCheckbox
        style={styles.boxCheckbox}
        color="error"
        checked={selected.includes(item.genre)}
        onPress={() => handleSelect(item.genre)}>
        <Text>{item.genre}</Text>
        <Text style={styles.boxCheckboxText}>{item.emoji}</Text>
      </BoxCheckbox>
    );
  };

  return (
    <Page style={styles.page}>
      <HatedGenresSvg style={styles.header} />
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

export default HatedGenres;