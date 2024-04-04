import React, {useState} from 'react';
import {Button, Page, Text, TMDBContentCheckbox} from '@/components';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {SERIES} from '@/data/constants';
import {TMDBSerieType} from '@/types';
import {FavoriteSeriseSvg} from '@/assets/images';
import {useRouter} from 'expo-router';

const FavoriteSeries = () => {
  const [selected, setSelected] = useState([] as number[]);

  const handleSelect = (value: number) => {
    if (selected.includes(value)) {
      setSelected(selected.filter(item => item !== value));
    } else {
      setSelected(prevState => [...prevState, value]);
    }
  };

  const router = useRouter();

  const handleNext = () => {
    // @TODO save selected movies and stuff
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
