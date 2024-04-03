import React, {FC} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {TMDBMovieType, TMDBSerieType} from '@/types';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from '@/components/Texts/Text';
import Image from '@/components/Images/Image';
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
      style={styles.touchable}
      onPress={() => bouncyCheckboxRef?.onPress()}>
      <View style={styles.globalView}>
        <View style={styles.subView}>
          <Image
            style={{width: 44, height: 64, marginRight: 8}}
            source={{
              uri: process.env.EXPO_PUBLIC_TMDB_POSTER_URL + item.poster_path,
            }}
          />
          <View style={styles.finalView}>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              {getTitle()}
            </Text>
            <Text
              style={{
                color: colors.rabbit,
              }}>
              {getReleaseDate()}
            </Text>
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
  touchable: {
    backgroundColor: colors.shark,
    borderRadius: 10,
    padding: 8,
  },
  globalView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subView: {
    display: 'flex',
    flexDirection: 'row',
  },
  finalView: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  iconStyle: {
    width: 32,
    height: 32,
    borderRadius: 24,
  },
});

export default TMDBContentCheckbox;
