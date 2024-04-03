import React, {useState} from 'react';
import {Button, LineCheckbox, Page, Text} from '@/components';
import {View} from 'react-native';
import {FavoriteContentSvg} from '@/assets/images';
import {useRouter} from 'expo-router';
import '../../../global.css';

const FavoriteContent = () => {
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
    router.navigate('/favorite-genres');
  };

  return (
    <Page className="px-0 w-full h-full pt-8 pb-8">
      <FavoriteContentSvg className="self-center" />
      <View className="flex-col w-full h-full flex-1">
        <LineCheckbox
          className="mb-6 mt-20"
          text="Films"
          onPress={() => handleSelect('films')}
        />
        <LineCheckbox text="Séries" onPress={() => handleSelect('series')} />
      </View>
      <Button className="mt-6" variant="primary" onPress={handleNext}>
        <Text>Suivant</Text>
      </Button>
    </Page>
  );
};

export default FavoriteContent;
