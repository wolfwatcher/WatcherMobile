import React, {useState} from 'react';
import {BoxCheckbox, Button, Page, Text} from '@/components';
import {FlatList, ListRenderItem} from 'react-native';
import {GenreItemType} from '@/types';
import {GENRES} from '@/data/constants';
import {HatedGenresSvg} from '@/assets/images';
import {useRouter} from 'expo-router';
import '../../../global.css';

const HatedGenres = () => {
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
    // @TODO: save hated genres and stuff
    router.navigate('/favorite-movies');
  };

  const renderItem: ListRenderItem<GenreItemType> = ({item}) => {
    return (
      <BoxCheckbox
        className="mb-4 mx-2"
        color="error"
        checked={selected.includes(item.genre)}
        onPress={() => handleSelect(item.genre)}>
        <Text>{item.genre}</Text>
        <Text className="ml-2">{item.emoji}</Text>
      </BoxCheckbox>
    );
  };

  return (
    <Page className="px-0 w-full h-full pt-8 pb-8">
      <HatedGenresSvg className="self-center mb-8" />
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

export default HatedGenres;
