import React, {FC} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {TMDBMovieType, TMDBSerieType} from '@/types';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Image, Text} from '@/components';
import HeartIcon from '@/assets/icons/HeartIcon';
import {colors} from '@/styles/theme';

interface TMDBContentCheckboxProps {
  item: TMDBMovieType | TMDBSerieType;
  onPress: () => void;
  isChecked: boolean;
}

const TMDBContentCheckbox: FC<TMDBContentCheckboxProps> = ({
  item,
  isChecked,
  onPress,
}) => {
  let bouncyCheckboxRef: BouncyCheckbox | null = null;

  const getTitle = () => {
    return 'title' in item ? item.title : item.name;
  };

  const getReleaseDate = () => {
    const date =
      'release_date' in item ? item.release_date : item.first_air_date;
    return new Date(date).getFullYear();
  };

  return (
    <TouchableOpacity
      className="bg-shark rounded-lg p-2"
      onPress={() => bouncyCheckboxRef?.onPress()}>
      <View className="flex flex-row justify-between">
        <View className="flex flex-row">
          <Image
            style={{width: 44, height: 64, marginRight: 8}}
            source={{uri: process.env.TMDB_POSTER_URL + item.poster_path}}
          />
          <View className="flex justify-around">
            <Text className="font-bold">{getTitle()}</Text>
            <Text className="text-rabbit">{getReleaseDate()}</Text>
          </View>
        </View>
        <BouncyCheckbox
          ref={(ref: any) => (bouncyCheckboxRef = ref)}
          isChecked={isChecked}
          iconComponent={<HeartIcon fill={isChecked ? 'pink' : 'white'} />}
          iconStyle={styles.iconStyle}
          innerIconStyle={styles.iconStyle}
          fillColor={isChecked ? colors.error : 'white'}
          unfillColor={'#FFFFFF4D'}
          disableBuiltInState
          disableText
          onPress={onPress}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    width: 32,
    height: 32,
    borderRadius: 24,
  },
});

export default TMDBContentCheckbox;
