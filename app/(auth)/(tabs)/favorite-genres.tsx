import React, {useState} from 'react';
import {BoxCheckbox, Button, Page, Text} from '@/components';
import {FlatList, ListRenderItem} from 'react-native';
import {GenreItemType} from '@/types';
import {GENRES} from '@/data/constants';
import {FavoriteGenresSvg} from '@/assets/images';
import {useRouter} from 'expo-router';
import '../../../global.css';

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
    router.navigate('/(auth)/(tabs)/hated-genres');
  };

  const renderItem: ListRenderItem<GenreItemType> = ({item}) => {
    return (
      <BoxCheckbox
        className="mb-4 mx-2"
        color="success"
        checked={selected.includes(item.genre)}
        onPress={() => handleSelect(item.genre)}>
        <Text>{item.genre}</Text>
        <Text className="ml-2">{item.emoji}</Text>
      </BoxCheckbox>
    );
  };

  return (
    <Page className="px-0 w-full h-full pt-8 pb-8">
      <FavoriteGenresSvg className="self-center mb-8" />
      <FlatList
        data={GENRES}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={item => item.genre}
      />
      <Button className="mt-6" variant="primary" onPress={handleNext}>
        <Text>Suivant</Text>
      </Button>
    </Page>
  );
};

export default FavoriteGenres;
