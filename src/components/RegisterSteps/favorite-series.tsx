import React, {FC, useState} from 'react';
import Page from '@/components/Pages/Page';
import Button from '@/components/Buttons/Button';
import Text from '@/components/Texts/Text';
import TMDBContentCheckbox from '@/components/Checkboxes/TMDBContentCheckbox';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {SERIES} from '@/data/constants';
import {RegisterStepPropsType, TMDBSerieType} from '@/types';
import {FavoriteSeriseSvg} from '@/assets/images';

const FavoriteSeries: FC<RegisterStepPropsType> = ({
  onNext,
  progression: {favoriteSeries},
}) => {
  const [selected, setSelected] = useState(favoriteSeries);

  const handleSelect = (value: number) => {
    if (selected.includes(value)) {
      setSelected(selected.filter(item => item !== value));
    } else {
      setSelected(prevState => [...prevState, value]);
    }
  };

  const handleNext = () => {
    onNext({favoriteSeries: selected});
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
