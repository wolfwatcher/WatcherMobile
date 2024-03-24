import React, {FC, useState} from 'react';
import {Button, Page, Text, TMDBContentCheckbox} from 'components';
import {FlatList, ListRenderItem} from 'react-native';
import {SERIES} from 'data/constants.ts';
import {RegisterStackParamList, TMDBSerieType} from 'types';
import {FavoriteSeriseSvg} from 'assets/images';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';

const FavoriteSeries: FC<
  NativeStackScreenProps<RegisterStackParamList, 'FavoriteSeriesScreen'>
> = ({navigation}) => {
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
    navigation.navigate('SubscriptionsScreen');
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
    <Page className="px-0 pt-8 pb-8">
      <FavoriteSeriseSvg className="self-center mb-8" />
      <FlatList
        data={SERIES}
        contentContainerStyle={styles.container}
        renderItem={renderItem}
        numColumns={1}
        keyExtractor={item => item.id.toString()}
      />
      <Button className="mt-6" variant="primary" onPress={handleNext}>
        <Text>Suivant</Text>
      </Button>
    </Page>
  );
};

const styles = {
  container: {
    gap: 24,
  },
};

export default FavoriteSeries;
